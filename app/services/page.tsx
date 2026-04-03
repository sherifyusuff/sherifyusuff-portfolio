import type { Metadata } from "next"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { services } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Services | Sherif Yusuff",
  description:
    "Explore the web development, ecommerce, WordPress, mobile app, and UI/UX services offered by Sherif Yusuff.",
}

export default function ServicesPage() {
  return (
    <main className="section-shell">
      <div className="section-container space-y-8 sm:space-y-10">
        <Reveal className="max-w-4xl space-y-3">
          <p className="section-eyebrow">Services</p>
          <h1 className="section-title">
            End-to-end web services designed to help brands grow with confidence.
          </h1>
          <p className="section-lead">
            From landing pages to content-led business websites and product interfaces, I help teams
            launch work that feels modern, clear, and commercially credible.
          </p>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {[
            "Clear business positioning and page hierarchy",
            "Responsive layouts designed to stay composed on smaller screens",
            "Modern implementation that remains easy to maintain over time",
          ].map((item, index) => (
            <Reveal
              key={item}
              delay={index * 70}
              className="interactive-card rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <p className="text-xs font-medium leading-relaxed text-foreground sm:text-sm">{item}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 60}
              className="interactive-card rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <service.icon size={20} />
              </div>
              <h2 className="mb-1.5 text-base font-bold text-foreground">{service.title}</h2>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{service.desc}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">How these services come together</h2>
            <div className="mt-3 space-y-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <p>
                Most successful projects need more than one isolated service. A company website may
                need positioning, content structure, interface polish, and performance strategy together.
              </p>
              <p>
                I approach delivery with the full picture in mind so the final product feels coherent,
                not pieced together.
              </p>
            </div>
          </Reveal>

          <Reveal className="rounded-3xl border border-border bg-card p-6 shadow-sm" delay={90}>
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Typical project outcomes</h2>
            <div className="mt-3 grid gap-3">
              {[
                "Sharper presentation for brands and service businesses",
                "Improved product visibility and clearer user journeys",
                "More polished mobile behavior across key pages",
                "Delivery choices that support scaling and future updates",
              ].map((item, index) => (
                <Reveal
                  key={item}
                  delay={130 + index * 60}
                  className="rounded-2xl bg-secondary p-3.5 text-xs leading-relaxed text-muted-foreground sm:text-sm"
                >
                  {item}
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="rounded-3xl border border-primary/20 bg-primary/10 p-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Need a tailored mix of these services?</h2>
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Some projects need strategy, design thinking, frontend polish, backend support, and CMS
            flexibility at once. I can help define a focused scope based on your goals.
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center text-xs font-semibold text-primary hover:underline"
          >
            Request a project conversation
          </Link>
        </Reveal>
      </div>
    </main>
  )
}
