"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

const PROFILE_IMAGE = "/images/sherif.png"

const personalInfo = [
  { icon: Phone, label: "Phone", value: "+234 XXX XXX XXXX", color: "text-primary" },
  { icon: Mail, label: "Email", value: "hello@sherifyusuff.com", color: "text-primary" },
  { icon: MapPin, label: "Location", value: "Lagos, Nigeria", color: "text-primary" },
  { icon: Calendar, label: "Experience", value: "5+ Years", color: "text-primary" },
]

export function AboutSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="text-center">
            <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              About <span className="text-primary">Me</span>
            </h2>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            {/* Profile image */}
            <div className="flex justify-center">
              <div className="relative h-80 w-72 overflow-hidden rounded-3xl border border-border shadow-lg sm:h-96 sm:w-80">
                <Image
                  src={PROFILE_IMAGE}
                  alt="Sherif Yusuff"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* About content */}
            <div>
              <h3 className="mb-4 font-mono text-xl font-bold text-foreground">Who Am I?</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {"I am a Full-Stack Web Developer and WordPress Specialist based in Lagos, Nigeria, focusing on both modern frameworks and established CMS platforms. I find great fulfillment in turning complex problems into designs that are not only visually attractive but also intuitive to use."}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {"My core goal is to deliver your message and brand identity in the most engaging way possible. Throughout my career, I've had the opportunity to collaborate with diverse brands, producing web experiences that strengthen their connection with audiences on a meaningful level."}
              </p>

              <h3 className="mb-4 mt-8 font-mono text-lg font-bold text-primary">Personal Info</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {personalInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <info.icon className={`h-4 w-4 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      <p className="text-sm font-medium text-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
