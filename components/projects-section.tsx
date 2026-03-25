"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "Tasty Hub Restaurant Website",
    description: "Restaurant website for Tasty Hub with a bold hero layout, menu-focused presentation, and conversion-friendly ordering touchpoints for food lovers.",
    image: "/images/project-tastyhub.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    demo: "https://tastyhub-theta.vercel.app/",
    github: "https://github.com/sherifyusuff/tastyhub",
  },
  {
    title: "Aurum Salon & Spa",
    description: "Premium salon and spa website designed with a polished dark aesthetic, service discovery flow, and booking-driven user journey for a luxury brand.",
    image: "/images/project-aurum.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "UI Design"],
    demo: "https://aurumm-five.vercel.app/",
    github: "https://github.com/sherifyusuff/aurum",
  },
  {
    title: "Heritage Fit Fashion Brand",
    description: "Elegant fashion brand website featuring editorial-style visuals, clear product storytelling, and a modern responsive layout tailored to premium apparel.",
    image: "/images/project-heritage-fit.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Brand Website"],
    demo: "https://v0-heritagefit.vercel.app/",
    github: "https://github.com/sapwebs2025/v0-heritage-fit-website",
  },
  {
    title: "Luxe Ecommerce Platform",
    description: "Luxury ecommerce storefront with polished product cards, category filtering, cart flows, and a refined responsive shopping experience.",
    image: "/images/project-ecommerce-new.webp",
    tech: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    demo: "https://luxe-ecommerce-store-sigma.vercel.app/",
    github: "https://github.com/sherifyusuff/luxe-ecommerce-store",
  },
  {
    title: "Sapwebs Corporate Website",
    description: "Corporate marketing website for Sapwebs featuring a polished hero section, clear service messaging, and a conversion-focused business layout.",
    image: "/images/project-corporate.webp",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    demo: "https://v0-sapwebs-website-design.vercel.app/",
    github: "https://github.com/sherifyusuff/sapwebs-corporate-website",
  },
  {
    title: "SaaS Analytical Admin Dashboard",
    description: "Admin dashboard experience with authentication, KPI-focused layouts, and a clean interface for teams tracking operational performance.",
    image: "/images/project-dashboard.webp",
    tech: ["Vite", "React", "TypeScript", "shadcn/ui"],
    demo: "https://saas-admin-dashboard-pnnu.vercel.app",
    github: "https://github.com/sherifyusuff/saas-admin-dashboard",
  },
  {
    title: "Car Dealership Gallery Website",
    description: "Luxury dealership website with a dynamic vehicle gallery, inventory browsing, service center highlights, and a strong editorial grid.",
    image: "/images/project-cardealership.webp",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    demo: "https://v0-car-dealership-website-lac.vercel.app/",
    github: "https://github.com/sherifyusuff/car-dealership-websites",
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
                    {"github" in project && project.github ? (
                      <Button asChild variant="outline" size="sm" className="gap-1.5 rounded-full">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </a>
                      </Button>
                    ) : null}
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
