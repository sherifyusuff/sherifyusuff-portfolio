"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const PROFILE_IMAGE = "/images/sherif-profile.png"

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      {/* Background decorative blob */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left content */}
        <div className={`transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <p className="mb-4 text-lg text-muted-foreground">
            {"I am"} <span className="font-mono font-bold text-primary">Sherif</span>
          </p>
          <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">Web Developer +</span>
            <br />
            <span className="text-primary">WordPress Expert</span>
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
            {"Full-Stack Developer based in Lagos, building scalable web applications and custom WordPress solutions. My goal is to make complex ideas simple, performant, and easy to use."}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 font-medium">
              <a href="#contact">
                {"Work With Me!"}
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right - Profile image */}
        <div className={`relative flex justify-center transition-all duration-1000 delay-200 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="relative">
            {/* Blue circle background */}
            <div className="absolute inset-0 -m-4 rounded-full bg-primary/10" />
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary/20 sm:h-96 sm:w-96">
              <Image
                src={PROFILE_IMAGE}
                alt="Sherif Yusuff - Full Stack Developer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex animate-bounce flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
