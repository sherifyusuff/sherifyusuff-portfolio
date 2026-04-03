import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, ExternalLink, MessageCircle, Star } from "lucide-react"
import { Reveal } from "@/components/reveal"
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
      <section className="relative overflow-hidden section-shell lg:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="section-container relative grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <Reveal className="space-y-5" delay={30}>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for projects
            </span>

            <p className="section-eyebrow">Full-Stack Developer - WordPress Specialist</p>

            <h1 className="max-w-3xl text-[2rem] font-bold leading-[1.02] text-balance text-primary sm:text-4xl lg:text-5xl">
              High-performing digital products for ambitious brands.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Sherif Yusuff builds modern websites, ecommerce experiences, and business-ready
              platforms with a focus on polished UX, responsive implementation, and dependable
              long-term structure.
            </p>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link
                href="/projects"
                className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:h-10 sm:w-auto sm:px-6 sm:justify-start"
              >
                View Projects <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/10 sm:h-10 sm:w-auto sm:px-6 sm:justify-start"
              >
                Work With Me <Download size={15} />
              </Link>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-full border border-green-600/30 bg-green-600 px-5 text-xs font-semibold text-white transition-colors hover:bg-green-500 sm:h-10 sm:w-auto sm:px-6 sm:justify-start"
              >
                Chat on WhatsApp <MessageCircle size={15} />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {socialLinks.map(({ Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            <div className="grid gap-3 pt-1 sm:flex sm:flex-wrap">
              {[
                { n: "3+", label: "Years Experience" },
                { n: "50+", label: "Completed Projects" },
                { n: "30+", label: "Happy Clients" },
              ].map((stat, index) => (
                <Reveal
                  key={stat.label}
                  delay={120 + index * 70}
                  className="rounded-2xl border border-border bg-card px-4 py-2.5 shadow-sm sm:min-w-[145px]"
                >
                  <p className="text-lg font-bold text-primary">{stat.n}</p>
                  <p className="text-[11px] text-muted-foreground">{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="flex justify-center md:justify-end" delay={120}>
            <div className="relative">
              <div className="absolute inset-6 rounded-[2rem] bg-primary/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-card p-2.5 shadow-[0_24px_72px_rgba(22,66,120,0.14)]">
                <div className="relative h-64 w-64 overflow-hidden rounded-[1.6rem] sm:h-[23rem] sm:w-[23rem] lg:h-[26rem] lg:w-[26rem]">
                  <Image
                    src={PROFILE_IMAGE}
                    alt="Sherif Yusuff"
                    fill
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 368px, 416px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 rounded-xl border border-border bg-card px-3 py-2 shadow-lg sm:-bottom-3 sm:-left-3">
                <p className="text-[10px] text-muted-foreground">Speciality</p>
                <p className="text-xs font-bold text-primary">Modern web products</p>
              </div>
              <div className="absolute -right-2 top-5 rounded-xl border border-border bg-card px-3 py-2 shadow-lg sm:-right-3 sm:top-7">
                <p className="text-[10px] text-muted-foreground">Status</p>
                <p className="text-xs font-bold text-foreground">Available for work</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell bg-secondary/45">
        <Reveal className="section-container">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-eyebrow">Services</p>
              <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">What I build</h2>
            </div>
            <Link href="/services" className="text-xs font-semibold text-primary hover:underline">
              Explore all services
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <Reveal
                key={service.title}
                delay={70 * index}
                className="interactive-card rounded-2xl border border-border bg-card p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon size={20} />
                </div>
                <h3 className="mb-1.5 text-base font-bold text-foreground">{service.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{service.desc}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-shell bg-background">
        <div className="section-container grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="section-eyebrow">Approach</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold text-balance text-foreground sm:text-3xl">
              Every project is built around clarity, user flow, and practical delivery.
            </h2>
            <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <p>
                Strong websites do more than look modern. They guide attention, communicate
                value quickly, and help visitors move with confidence.
              </p>
              <p>
                Whether it&apos;s a corporate website, product landing page, or dashboard experience,
                the objective stays consistent: clean, fast, intentional, and easy to maintain.
              </p>
            </div>
          </Reveal>

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
            ].map((item, index) => (
              <Reveal
                key={item.title}
                delay={80 + index * 70}
                className="interactive-card rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-container">
          <Reveal>
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-eyebrow">Projects</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">Selected work</h2>
              </div>
              <Link href="/projects" className="text-xs font-semibold text-primary hover:underline">
                Browse portfolio
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.slice(0, 2).map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 90}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{project.desc}</p>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Built to balance visual polish with clear communication and reliable responsive structure.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-primary sm:text-[11px]"
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
                      className="inline-flex items-center gap-2 text-xs font-semibold text-primary"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-secondary/45">
        <div className="section-container">
          <Reveal>
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-eyebrow">Testimonials</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">Trusted by clients</h2>
              </div>
              <Link href="/contact" className="text-xs font-semibold text-primary hover:underline">
                Start a conversation
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 80}
                className="interactive-card rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, ratingIndex) => (
                    <Star key={ratingIndex} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{item.text}</p>
                <div className="mt-4 border-t border-border pt-3">
                  <p className="text-xs font-bold text-foreground sm:text-sm">{item.name}</p>
                  <p className="text-[11px] text-muted-foreground">{item.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <Reveal className="section-container rounded-[1.75rem] border border-primary/20 bg-primary/10 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-3">
              <p className="section-eyebrow">Next Step</p>
              <h2 className="max-w-3xl text-2xl font-bold text-balance text-foreground sm:text-3xl">
                Need a website or product experience that feels premium and well organized?
              </h2>
              <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                I work with founders, growing businesses, and teams that want stronger visual
                credibility, better UX flow, and implementation they can trust after launch.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex h-9 w-full items-center justify-center rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 sm:h-10 sm:w-auto sm:px-6"
              >
                Start a Project
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-9 w-full items-center justify-center rounded-full border border-primary/30 px-5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/10 sm:h-10 sm:w-auto sm:px-6"
              >
                Review My Work
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}

