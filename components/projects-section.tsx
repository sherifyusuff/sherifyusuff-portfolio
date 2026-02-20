"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory, payment integration, and admin dashboard built for a retail client.",
    image: "/images/project-ecommerce.jpg",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    demo: "#",
    github: "#",
  },
  {
    title: "WordPress Business Suite",
    description: "Custom WordPress theme and plugin suite for a corporate client, featuring advanced ACF layouts, WooCommerce integration, and multilingual support.",
    image: "/images/project-wordpress.jpg",
    tech: ["WordPress", "PHP", "MySQL", "WooCommerce"],
    demo: "#",
    github: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Real-time analytics dashboard with role-based access control, data visualization, and automated reporting for a SaaS startup.",
    image: "/images/project-dashboard.jpg",
    tech: ["React", "Express", "PostgreSQL", "Chart.js"],
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio & Blog CMS",
    description: "A headless CMS-powered portfolio and blog platform with MDX support, dynamic OG images, and blazing-fast performance.",
    image: "/images/project-blog.jpg",
    tech: ["Next.js", "Tailwind", "Sanity", "Vercel"],
    demo: "#",
    github: "#",
  },
]

export function ProjectsSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="text-center">
            <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              My <span className="text-primary">Portfolio</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-mono text-lg font-bold text-foreground">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-full text-xs font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="gap-1.5 rounded-full">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="gap-1.5 rounded-full">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
