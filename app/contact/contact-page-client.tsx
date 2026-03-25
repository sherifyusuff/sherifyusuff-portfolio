"use client"

import { contactChannels, EMAIL_ADDRESS, buildWhatsAppUrl, socialLinks } from "@/lib/site-data"
import { MessageCircle, Send } from "lucide-react"

export function ContactPageClient() {
  return (
    <main className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Contact</p>
          <h1 className="text-4xl font-bold leading-[1.02] text-balance text-foreground md:text-6xl">
            Let&apos;s build something clear, useful, and memorable.
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Reach out by email or WhatsApp with your project idea, timeline, and goals.
            I&apos;m available for freelance work and remote collaborations, and I&apos;m happy to
            discuss how a stronger website or product experience can support your business more effectively.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const name = (form.elements.namedItem("name") as HTMLInputElement).value
              const email = (form.elements.namedItem("email") as HTMLInputElement).value
              const subject = (form.elements.namedItem("subject") as HTMLInputElement).value
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value
              const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`
              window.open(`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${body}`)
            }}
            className="space-y-5 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project subject"
                className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send via Email <Send size={16} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  const form = e.currentTarget.form
                  if (!form) return
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value
                  const subject = (form.elements.namedItem("subject") as HTMLInputElement).value
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value
                  window.open(buildWhatsAppUrl({ name, email, subject, message }), "_blank", "noopener,noreferrer")
                }}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-8 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/10"
              >
                Send via WhatsApp <MessageCircle size={16} />
              </button>
            </div>
          </form>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-foreground">Preferred communication channels</h2>
              <div className="space-y-5">
                {contactChannels.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/10 p-6">
              <h2 className="text-lg font-bold text-foreground">Open for opportunities</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                If you need a polished company website, a product landing page, a dashboard,
                or a more complete build, I&apos;m ready to help shape it with you.
              </p>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start WhatsApp Chat <MessageCircle size={16} />
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-foreground">What to include when you reach out</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              "A short summary of what you want to build or improve",
              "Any timeline, launch target, or important delivery constraint",
              "References, existing links, or examples of the style you want",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-secondary p-4 text-sm leading-relaxed text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
