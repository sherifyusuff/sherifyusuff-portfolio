"use client"

import Script from "next/script"
import { useEffect, useMemo, useRef, useState } from "react"
import { contactChannels, buildWhatsAppUrl, socialLinks } from "@/lib/site-data"
import { Reveal } from "@/components/reveal"
import { MessageCircle, Send } from "lucide-react"

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string
          theme?: "light" | "dark" | "auto"
          callback?: (token: string) => void
          "expired-callback"?: () => void
          "error-callback"?: () => void
        },
      ) => string
      reset: (widgetId?: string) => void
    }
  }
}

type ContactFormValues = {
  name: string
  email: string
  subject: string
  message: string
  website: string
}

export function ContactPageClient() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null)

  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  })
  const [formStartedAt, setFormStartedAt] = useState<number>(Date.now())
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({})
  const [statusMessage, setStatusMessage] = useState<string>("")
  const [statusType, setStatusType] = useState<"success" | "error" | "idle">("idle")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState("")
  const [turnstileWidgetId, setTurnstileWidgetId] = useState<string | null>(null)
  const [turnstileError, setTurnstileError] = useState("")

  useEffect(() => {
    setFormStartedAt(Date.now())
  }, [])

  useEffect(() => {
    if (!turnstileSiteKey || turnstileWidgetId) return

    let cancelled = false
    const tryRender = () => {
      if (cancelled || !turnstileContainerRef.current || !window.turnstile) return
      const id = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: turnstileSiteKey,
        theme: "auto",
        callback: (token) => {
          setTurnstileToken(token)
          setTurnstileError("")
        },
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => {
          setTurnstileToken("")
          setTurnstileError("Security check failed to load. Please refresh and try again.")
        },
      })
      setTurnstileWidgetId(id)
    }

    tryRender()
    const timer = window.setInterval(tryRender, 300)
    return () => {
      cancelled = true
      window.clearInterval(timer)
    }
  }, [turnstileSiteKey, turnstileWidgetId])

  const isFormComplete = useMemo(() => {
    return (
      values.name.trim().length >= 2 &&
      /\S+@\S+\.\S+/.test(values.email) &&
      values.subject.trim().length >= 3 &&
      values.message.trim().length >= 10
    )
  }, [values])

  function validate(current: ContactFormValues) {
    const nextErrors: Partial<Record<keyof ContactFormValues, string>> = {}

    if (current.name.trim().length < 2) nextErrors.name = "Name must be at least 2 characters."
    if (!/\S+@\S+\.\S+/.test(current.email)) nextErrors.email = "Enter a valid email address."
    if (current.subject.trim().length < 3) nextErrors.subject = "Subject must be at least 3 characters."
    if (current.message.trim().length < 10) nextErrors.message = "Message must be at least 10 characters."
    if (current.website.trim().length > 0) nextErrors.website = "Spam detected."

    return nextErrors
  }

  function updateField<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
    setStatusMessage("")
    setStatusType("idle")
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatusType("error")
      setStatusMessage("Please fix the highlighted fields and try again.")
      return
    }

    if (turnstileSiteKey && !turnstileToken) {
      setStatusType("error")
      setStatusMessage("Please complete the security check before submitting.")
      return
    }

    try {
      setIsSubmitting(true)
      setStatusType("idle")
      setStatusMessage("")

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          turnstileToken,
          website: values.website,
          formStartedAt,
        }),
      })

      const result = (await response.json()) as { ok?: boolean; message?: string }

      if (!response.ok || !result.ok) {
        setStatusType("error")
        setStatusMessage(result.message ?? "Unable to send your message right now.")
        return
      }

      setStatusType("success")
      setStatusMessage("Thanks, your message has been sent successfully.")
      setValues({ name: "", email: "", subject: "", message: "", website: "" })
      setTurnstileToken("")
      setFormStartedAt(Date.now())
      if (window.turnstile && turnstileWidgetId) {
        window.turnstile.reset(turnstileWidgetId)
      }
    } catch {
      setStatusType("error")
      setStatusMessage("Network error. Please try again in a moment.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="section-shell">
      {turnstileSiteKey ? (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" />
      ) : null}
      <div className="section-container space-y-8 sm:space-y-10">
        <Reveal className="max-w-4xl space-y-3">
          <p className="section-eyebrow">Contact</p>
          <h1 className="section-title">Let&apos;s build something clear, useful, and memorable.</h1>
          <p className="section-lead">
            Reach out by email or WhatsApp with your project idea, timeline, and goals.
            I&apos;m available for freelance work and remote collaborations.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal
            className="space-y-4 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6"
            delay={40}
          >
            <form onSubmit={onSubmit} className="space-y-4" noValidate aria-busy={isSubmitting}>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={values.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="w-full rounded-lg border border-border bg-secondary px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-1 text-[11px] text-red-600">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={values.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full rounded-lg border border-border bg-secondary px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-1 text-[11px] text-red-600">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project subject"
                  value={values.subject}
                  onChange={(e) => updateField("subject", e.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className="w-full rounded-lg border border-border bg-secondary px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                {errors.subject ? (
                  <p id="subject-error" className="mt-1 text-[11px] text-red-600">
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={values.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full resize-none rounded-lg border border-border bg-secondary px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1 text-[11px] text-red-600">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <input
                type="text"
                name="website"
                value={values.website}
                onChange={(e) => updateField("website", e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <input type="hidden" name="formStartedAt" value={formStartedAt} />

              {turnstileSiteKey ? (
                <div>
                  <div ref={turnstileContainerRef} className="min-h-[66px]" />
                  {turnstileError ? <p className="mt-1 text-[11px] text-red-600">{turnstileError}</p> : null}
                </div>
              ) : null}

              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormComplete || (Boolean(turnstileSiteKey) && !turnstileToken)}
                  className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:h-10 sm:w-auto sm:px-6"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send size={14} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    window.open(
                      buildWhatsAppUrl({
                        name: values.name,
                        email: values.email,
                        subject: values.subject,
                        message: values.message,
                      }),
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }}
                  className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/10 sm:h-10 sm:w-auto sm:px-6"
                >
                  Send via WhatsApp <MessageCircle size={14} />
                </button>
              </div>

              {statusMessage ? (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-xs ${
                    statusType === "success" ? "text-green-700" : statusType === "error" ? "text-red-600" : "text-muted-foreground"
                  }`}
                >
                  {statusMessage}
                </p>
              ) : null}
            </form>
          </Reveal>

          <div className="space-y-4">
            <Reveal className="rounded-3xl border border-border bg-card p-5 shadow-sm">
              <h2 className="mb-4 text-lg font-bold text-foreground">Preferred communication channels</h2>
              <div className="space-y-4">
                {contactChannels.map((item, index) => (
                  <Reveal key={item.label} delay={80 + index * 50} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-foreground transition-colors hover:text-primary sm:text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xs font-semibold text-foreground sm:text-sm">{item.value}</p>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal className="rounded-3xl border border-primary/20 bg-primary/10 p-5" delay={120}>
              <h2 className="text-base font-bold text-foreground">Open for opportunities</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                If you need a polished company website, product landing page, dashboard, or a complete build,
                I&apos;m ready to help shape it with you.
              </p>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex h-9 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 sm:h-10 sm:w-auto"
              >
                Start WhatsApp Chat <MessageCircle size={14} />
              </a>
            </Reveal>

            <Reveal className="flex flex-wrap gap-2.5" delay={140}>
              {socialLinks.map(({ Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">What to include when you reach out</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {[
              "A short summary of what you want to build or improve",
              "Any timeline, launch target, or delivery constraints",
              "References, existing links, or examples of your preferred style",
            ].map((item, index) => (
              <Reveal
                key={item}
                delay={160 + index * 55}
                className="rounded-2xl bg-secondary p-3.5 text-xs leading-relaxed text-muted-foreground sm:text-sm"
              >
                {item}
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </main>
  )
}
