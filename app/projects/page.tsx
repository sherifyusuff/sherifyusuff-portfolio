import type { Metadata } from "next"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { projects } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Projects | Sherif Yusuff",
  description:
    "Browse selected projects by Sherif Yusuff, including restaurant, salon, fashion, ecommerce, dashboard, and corporate website builds.",
}

export default function ProjectsPage() {
  return (
    <main className="section-shell">
      <div className="section-container space-y-8 sm:space-y-10">
        <Reveal className="max-w-4xl space-y-3">
          <p className="section-eyebrow">Projects</p>
          <h1 className="section-title">
            A portfolio of business-focused websites, products, and interfaces.
          </h1>
          <p className="section-lead">
            These projects reflect practical business communication, stronger interface hierarchy,
            and modern frontend execution across ecommerce, dashboards, and corporate builds.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Commercial clarity",
              text: "Projects are structured to communicate value quickly and support clear user decisions.",
            },
            {
              title: "Visual discipline",
              text: "Layouts are built with rhythm and spacing that make interfaces feel intentional.",
            },
            {
              title: "Responsive execution",
              text: "Each experience holds structure across desktop, tablet, and mobile screens.",
            },
          ].map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 70}
              className="interactive-card rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <h2 className="text-lg font-bold text-foreground">{item.title}</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{item.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 60}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_80px_rgba(22,66,120,0.14)]"
            >
              <article>
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index < 2}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="space-y-3 p-5">
                  <div>
                    <h2 className="text-lg font-bold text-foreground">{project.title}</h2>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{project.desc}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      This build emphasizes clear hierarchy, visual polish, and responsive behavior.
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
                  <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 sm:w-auto"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:w-auto"
                      >
                        Source Code <Github size={14} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="rounded-3xl border border-primary/20 bg-primary/10 p-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Looking for work with this level of presentation?
          </h2>
          <p className="mt-2 max-w-3xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
            If you want a cleaner and more professional website or product interface, I can shape
            the visual direction and implementation to create a confident first impression.
          </p>
        </Reveal>
      </div>
    </main>
  )
}
