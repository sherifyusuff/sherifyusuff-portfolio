import type { Metadata } from "next"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Projects | Sherif Yusuff",
  description:
    "Browse selected projects by Sherif Yusuff, including restaurant, salon, fashion, ecommerce, dashboard, and corporate website builds.",
}

export default function ProjectsPage() {
  return (
    <main className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Projects</p>
          <h1 className="text-4xl font-bold leading-[1.02] text-balance text-foreground md:text-6xl">
            A portfolio of business-focused websites, products, and interfaces.
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            These projects reflect a practical mix of business presentation, interface clarity,
            and modern frontend execution. They show how I approach ecommerce experiences,
            dashboard layouts, corporate websites, and visual storytelling with a more polished,
            professional structure.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Commercial clarity",
              text: "Projects are structured to communicate value quickly and support clear user decisions.",
            },
            {
              title: "Visual discipline",
              text: "Layouts are built with hierarchy, rhythm, and spacing that make the interface feel intentional.",
            },
            {
              title: "Responsive execution",
              text: "Each experience is designed to hold its structure across desktop and mobile screens.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_24px_80px_rgba(22,66,120,0.14)]"
            >
              <div className="relative h-56 overflow-hidden sm:h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index < 2}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground">{project.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    This project focuses on creating a more refined user experience through
                    strong visual hierarchy, thoughtful interface decisions, and a responsive
                    layout approach that keeps the presentation effective across screen sizes.
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
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:opacity-90"
                  >
                    Live Demo <ExternalLink size={15} />
                  </a>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-all hover:scale-[1.02] hover:border-primary hover:text-primary"
                    >
                      Source Code <Github size={15} />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-primary/20 bg-primary/10 p-8">
          <h2 className="text-2xl font-bold text-foreground">Looking for work with this level of presentation?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            If you want a cleaner, more professional website or product interface for your brand,
            I can help shape the structure, visual direction, and implementation so the final
            experience feels deliberate and credible from the first impression.
          </p>
        </div>
      </div>
    </main>
  )
}
