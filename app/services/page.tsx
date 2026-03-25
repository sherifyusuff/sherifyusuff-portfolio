import type { Metadata } from "next"
import Link from "next/link"
import { services } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Services | Sherif Yusuff",
  description:
    "Explore the web development, ecommerce, WordPress, mobile app, and UI/UX services offered by Sherif Yusuff.",
}

export default function ServicesPage() {
  return (
    <main className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Services</p>
          <h1 className="text-4xl font-bold leading-[1.02] text-balance text-foreground md:text-6xl">
            End-to-end web services structured to help brands grow with more confidence online.
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From landing pages to content-led corporate websites and full product experiences,
            I help businesses launch digital work that feels modern, communicates clearly, and
            supports credibility, usability, and growth.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            "Clear business positioning and page hierarchy",
            "Responsive layouts designed to feel composed on mobile",
            "Modern implementation that remains easy to update later",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-sm font-medium leading-relaxed text-foreground">{item}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon size={22} />
              </div>
              <h2 className="mb-2 text-lg font-bold text-foreground">{service.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">How these services come together</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Most successful projects need more than one isolated service. A company website,
                for example, may need positioning, content structure, interface polish, CMS
                flexibility, and performance thinking all at once.
              </p>
              <p>
                That is why I approach delivery with the full picture in mind. The visual layer,
                content flow, responsive behavior, and technical setup are all considered together
                so the end result feels coherent rather than pieced together.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">Typical project outcomes</h2>
            <div className="mt-4 grid gap-4">
              {[
                "Sharper presentation for brands and service businesses",
                "Improved product visibility and clearer user journeys",
                "More polished mobile behavior across key pages",
                "Delivery choices that support future scaling and updates",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-secondary p-4 text-sm leading-relaxed text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-primary/20 bg-primary/10 p-8">
          <h2 className="text-2xl font-bold text-foreground">Need a tailored mix of these services?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Some projects need strategy, design thinking, frontend polish, backend support,
            and CMS flexibility all at once. I can help shape the right scope based on your
            goals and delivery timeline.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
          >
            Request a project conversation
          </Link>
        </div>
      </div>
    </main>
  )
}
