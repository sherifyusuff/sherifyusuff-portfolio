import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  subject: z.string().trim().min(3).max(140),
  message: z.string().trim().min(10).max(5000),
  turnstileToken: z.string().trim().optional(),
  website: z.string().max(0).optional(),
  formStartedAt: z.number().int().positive(),
})

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5
const MIN_FILL_MS = 2500

const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

function getClientIp(req: NextRequest) {
  const forwardedFor = req.headers.get("x-forwarded-for")
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? "unknown"
  return req.headers.get("x-real-ip") ?? "unknown"
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX) return true
  entry.count += 1
  rateLimitStore.set(ip, entry)
  return false
}

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export async function POST(req: NextRequest) {
  try {
    const rawData: unknown = await req.json()
    const parsed = contactSchema.safeParse(rawData)

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Please complete all fields with valid details." },
        { status: 400 },
      )
    }

    const ip = getClientIp(req)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, message: "Too many requests. Please try again in a few minutes." },
        { status: 429 },
      )
    }

    const { name, email, subject, message, website, formStartedAt, turnstileToken } = parsed.data

    if (website) {
      return NextResponse.json({ ok: true, message: "Message sent." })
    }

    if (Date.now() - formStartedAt < MIN_FILL_MS) {
      return NextResponse.json(
        { ok: false, message: "Submission rejected. Please try again." },
        { status: 400 },
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.CONTACT_FROM_EMAIL
    const toEmail = process.env.CONTACT_TO_EMAIL
    const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY

    if (turnstileSecretKey) {
      if (!turnstileToken) {
        return NextResponse.json(
          { ok: false, message: "Please complete the security check and try again." },
          { status: 400 },
        )
      }

      const turnstileCheck = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: turnstileSecretKey,
          response: turnstileToken,
          remoteip: ip,
        }).toString(),
      })

      const turnstileResult = (await turnstileCheck.json()) as { success?: boolean }
      if (!turnstileResult.success) {
        return NextResponse.json(
          { ok: false, message: "Security verification failed. Please try again." },
          { status: 400 },
        )
      }
    }

    if (!resendApiKey || !fromEmail || !toEmail) {
      return NextResponse.json(
        { ok: false, message: "Contact service is not configured yet." },
        { status: 500 },
      )
    }

    const emailSubject = `Portfolio Contact: ${subject}`
    const escapedMessage = escapeHtml(message).replaceAll("\n", "<br />")
    const escapedName = escapeHtml(name)
    const escapedEmail = escapeHtml(email)
    const escapedSubject = escapeHtml(subject)

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
        <h2 style="margin:0 0 16px 0;color:#0f3c78">New Portfolio Contact Message</h2>
        <p style="margin:0 0 12px 0"><strong>Name:</strong> ${escapedName}</p>
        <p style="margin:0 0 12px 0"><strong>Email:</strong> ${escapedEmail}</p>
        <p style="margin:0 0 12px 0"><strong>Subject:</strong> ${escapedSubject}</p>
        <p style="margin:0 0 8px 0"><strong>Message:</strong></p>
        <div style="padding:12px;border:1px solid #dbe1eb;border-radius:8px;background:#f8fafc">${escapedMessage}</div>
      </div>
    `

    const text = `New Portfolio Contact Message

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: emailSubject,
        html,
        text,
      }),
    })

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, message: "Unable to deliver email right now. Please try again shortly." },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true, message: "Message sent successfully." })
  } catch {
    return NextResponse.json(
      { ok: false, message: "Something went wrong while sending your message." },
      { status: 500 },
    )
  }
}
