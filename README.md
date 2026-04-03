# Sherif Yusuff Portfolio

Modern Next.js portfolio with secure contact form delivery.

## Contact Form Setup

Create `.env.local` in project root:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_FROM_EMAIL=Portfolio Contact <hello@yourdomain.com>
CONTACT_TO_EMAIL=you@yourdomain.com
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAA...
TURNSTILE_SECRET_KEY=0x4AAAA...
```

## Email Delivery (Resend)

1. Create a Resend account and API key.
2. Verify your sending domain in Resend.
3. Set `CONTACT_FROM_EMAIL` to a verified sender address.
4. Publish DNS records (SPF, DKIM, and recommended DMARC) for better inbox placement.

## Anti-Spam Protection

- Honeypot field (`website`)
- Minimum completion time guard
- Server-side rate limiting
- Cloudflare Turnstile token verification (when keys are configured)

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/contact` and submit the form.

## Production Checklist

1. Set all env vars in your deployment platform (Vercel/Netlify/etc.).
2. Redeploy.
3. Submit a real test message.
4. Check inbox + spam folder.
5. If spam placement occurs, validate SPF/DKIM/DMARC and sender reputation.

## Build Verification

```bash
npm run build
```
