import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, ExternalLink, MessageCircle, Star } from "lucide-react"
import {
  PROFILE_IMAGE,
  buildWhatsAppUrl,
  projects,
  services,
  socialLinks,
  testimonials,
} from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Sherif Yusuff | Full-Stack Developer",
  description:
    "Portfolio homepage for Sherif Yusuff, a Full-Stack Developer and WordPress specialist building modern websites, dashboards, and ecommerce products.",
}

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-14 lg:gap-20">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for projects
            </span>

            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/90">
              Full-Stack Developer • WordPress Specialist
            </p>

            <h1 className="max-w-3xl text-3xl font-bold leading-[1] text-balance text-primary sm:text-4xl lg:text-[4rem]">
              Professional digital products designed to help ambitious brands look sharper and grow faster.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sherif Yusuff is a Full-Stack Developer and WordPress specialist focused on
              building modern websites, ecommerce experiences, dashboards, and business-ready
              digital platforms. The work combines thoughtful design structure, responsive
              frontend execution, and reliable implementation so every project feels clear,
              polished, and built to perform.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 sm:justify-start"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-7 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/10 sm:justify-start"
              >
                Work With Me <Download size={16} />
              </Link>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-green-600/30 bg-green-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-green-500 sm:justify-start"
              >
                Chat on WhatsApp <MessageCircle size={16} />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {socialLinks.map(({ Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div className="grid gap-4 pt-2 sm:flex sm:flex-wrap">
              {[
                { n: "3+", label: "Years Experience" },
                { n: "50+", label: "Completed Projects" },
                { n: "30+", label: "Happy Clients" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card px-5 py-3 shadow-sm sm:min-w-[150px]"
                >
                  <p className="text-xl font-bold text-primary">{stat.n}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end md:self-start">
            <div className="relative md:-mt-10 lg:-mt-16">
              <div className="absolute inset-6 rounded-[2rem] bg-primary/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/60 bg-card p-3 shadow-[0_24px_80px_rgba(22,66,120,0.16)]">
                <div className="relative h-80 w-80 overflow-hidden rounded-[1.7rem] sm:h-[28rem] sm:w-[28rem] lg:h-[32rem] lg:w-[32rem]">
                <Image
                  src={PROFILE_IMAGE}
                  alt="Sherif Yusuff"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 448px, 512px"
                  className="object-cover object-top"
                />
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:-bottom-4 sm:-left-4">
                <p className="text-xs text-muted-foreground">Speciality</p>
                <p className="text-sm font-bold text-primary">Modern web products</p>
              </div>
              <div className="absolute -right-2 top-6 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:-right-4 sm:top-8">
                <p className="text-xs text-muted-foreground">Status</p>
                <p className="text-sm font-bold text-foreground">Available for work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Services</p>
              <h2 className="mt-2 text-3xl font-bold text-foreground">What I build</h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-primary hover:underline">
              Explore all services
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon size={22} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Approach</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold text-balance text-foreground sm:text-4xl">
              Every project is shaped around message clarity, user flow, and practical delivery.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Strong websites do more than look modern. They guide attention, communicate
                value quickly, and help visitors move with confidence. That is why each project
                begins with structure: what the audience needs to understand first, where trust
                should be built, and how the interface should support business goals.
              </p>
              <p>
                Whether the work involves a corporate website, a product-focused landing page,
                or a more functional dashboard experience, the objective stays the same: make
                the experience feel clean, fast, intentional, and easy to maintain over time.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              {
                title: "Business-first design",
                text: "Clear positioning, stronger hierarchy, and layout systems that support trust and conversion.",
              },
              {
                title: "Responsive by default",
                text: "Interfaces designed to feel composed on desktop, tablet, and mobile without losing clarity.",
              },
              {
                title: "Scalable implementation",
                text: "Modern tooling and maintainable code choices that keep future updates manageable.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Projects</p>
              <h2 className="mt-2 text-3xl font-bold text-foreground">Selected work</h2>
            </div>
            <Link href="/projects" className="text-sm font-semibold text-primary hover:underline">
              Browse portfolio
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Each project is built to balance visual polish with clear communication,
                      responsive structure, and a stronger sense of professional presentation.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Live Demo <ExternalLink size={15} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Testimonials</p>
              <h2 className="mt-2 text-3xl font-bold text-foreground">Trusted by clients</h2>
            </div>
            <Link href="/contact" className="text-sm font-semibold text-primary hover:underline">
              Start a conversation
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star key={index} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-bold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-primary/20 bg-primary/10 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Next Step</p>
              <h2 className="max-w-3xl text-3xl font-bold text-balance text-foreground sm:text-4xl">
                If you need a website or product experience that feels more premium and better organised, let&apos;s build it well.
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                I work with founders, growing businesses, and teams that want a stronger web
                presence, better visual credibility, and implementation they can rely on after launch.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start a Project
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-full border border-primary/30 px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/10"
              >
                Review My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
