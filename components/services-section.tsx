"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, ShoppingCart, Paintbrush, Globe, Search, Video } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description: "Crafting a unique identity and positioning that sets your business apart in a crowded market.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Custom online store development with smooth checkout, secure payments, and user-friendly shopping.",
  },
  {
    icon: Paintbrush,
    title: "Graphic Design",
    description: "Creative, eye-catching designs that help your brand communicate clearly and attractively.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive, and fast-loading websites tailored to your business needs.",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Driving organic traffic and sales through powerful search optimization and online campaigns.",
  },
  {
    icon: Video,
    title: "Video Editing & Motion Graphics",
    description: "Engaging videos and animations that tell your story and connect with your audience.",
  },
]

export function ServicesSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="text-center">
            <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What <span className="text-primary">I Offer!</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`group rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-mono text-base font-bold text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
