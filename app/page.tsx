"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
  Send,
  Code,
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  Film,
  Star,
  Quote,
  ChevronDown,
  Calendar,
  MessageCircle,
} from "lucide-react"
import { useTheme } from "next-themes"

/* ------------------------------------------------------------------ */
/*  Animated Section Wrapper                                          */
/* ------------------------------------------------------------------ */
function AnimatedSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const mountedRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && mountedRef.current) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => {
      mountedRef.current = false
      obs.disconnect()
    }
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section Title                                                     */
/* ------------------------------------------------------------------ */
function SectionTitle({ highlight, rest }: { highlight: string; rest: string }) {
  return (
    <h2 className="text-3xl font-bold text-center font-sans mb-12 text-balance">
      <span className="text-primary">{highlight}</span> {rest}
    </h2>
  )
}

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

const services = [
  { icon: Smartphone, title: "Mobile App Development", desc: "Building cross-platform mobile applications with React Native and Flutter for seamless user experiences on any device." },
  { icon: ShoppingCart, title: "E-commerce Solutions", desc: "Custom online store development with smooth checkout, secure payments, and user-friendly shopping." },
  { icon: Code, title: "Web Development", desc: "Modern, responsive, and fast-loading websites tailored to your business needs." },
  { icon: Search, title: "SEO & Digital Marketing", desc: "Driving organic traffic and sales through powerful search optimization and online campaigns." },
  { icon: Globe, title: "WordPress Development", desc: "Custom themes, plugins, and full CMS solutions built on the world's most popular platform." },
  { icon: Film, title: "UI/UX Design", desc: "Creating intuitive and visually stunning interfaces that delight users and drive conversions." },
]

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-featured online store with product catalog, cart system, category filtering, and responsive design built with modern tooling.",
    tags: ["Vite", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    image: "/images/project-ecommerce-new.png",
    github: "https://github.com/sherifyusuff/luxe-ecommerce-store",
    live: "https://luxe-ecommerce-store-sigma.vercel.app/",
  },
  {
    title: "Corporate Websites",
    desc: "Professional corporate website delivering reliable, scalable, and user-focused web solutions designed to help businesses thrive in a digital world.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/project-corporate.png",
    github: "https://github.com/sherifyusuff/sapwebs-corporate-website",
    live: "https://v0-sapwebs-website-design.vercel.app/",
  },
  {
    title: "SaaS Analytics Dashboard",
    desc: "Real-time data visualization dashboard with interactive charts, KPI tracking, revenue analytics, and user growth metrics.",
    tags: ["Vite", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    image: "/images/project-dashboard.png",
    github: "https://github.com/sherifyusuff/saas-admin-dashboard",
    live: "https://saas-admin-dashboard-pnnu.vercel.app",
  },
  {
    title: "Car Dealership Gallery",
    desc: "Luxury car dealership website with a dynamic vehicle gallery, inventory browsing, service center showcase, and responsive image grid layout.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/project-cardealership.png",
    github: "https://github.com/sherifyusuff/car-dealership-websites",
    live: "https://v0-car-dealership-website-lac.vercel.app/",
  },
]

const skills = [
  { name: "React / Next.js", pct: 95 },
  { name: "TypeScript", pct: 90 },
  { name: "Node.js / Express", pct: 88 },
  { name: "WordPress / PHP", pct: 92 },
  { name: "Tailwind CSS", pct: 95 },
  { name: "MongoDB / PostgreSQL", pct: 85 },
  { name: "REST APIs / GraphQL", pct: 88 },
  { name: "Git / DevOps", pct: 82 },
]

const testimonials = [
  {
    name: "Chioma Adeyemi",
    role: "CEO, TechHub Nigeria",
    text: "Sherif built our company website from scratch using Next.js. The site loads incredibly fast, ranks well on Google, and the custom CMS he integrated makes content updates effortless for our team.",
    rating: 5,
  },
  {
    name: "Tunde Oluwaseun",
    role: "Founder, LuxeStore Lagos",
    text: "Sherif redesigned our WordPress e-commerce website and the results speak for themselves. Our page speed improved by 60%, mobile conversions doubled, and the new checkout flow is seamless.",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    role: "Director, InnovateTech Solutions",
    text: "Sherif developed our SaaS dashboard website with real-time analytics and user authentication. He delivered pixel-perfect responsive design and the codebase is clean and well-documented.",
    rating: 5,
  },
]

const PROFILE_IMAGE = "/images/sherif.png"

/* ------------------------------------------------------------------ */
/*  MAIN PAGE                                                         */
/* ------------------------------------------------------------------ */
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  if (!ready) return <div className="h-9 w-9" />

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-9 w-9 rounded-lg flex items-center justify-center border border-border text-muted-foreground hover:text-primary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/80 backdrop-blur-lg shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm font-sans">
              SY
            </span>
            <span className="font-sans font-bold text-lg text-foreground">
              Sherif<span className="text-primary">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden md:inline-flex h-9 px-5 items-center rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Hire Me!
            </a>
            <button
              className="md:hidden h-9 w-9 rounded-lg flex items-center justify-center border border-border text-muted-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border px-6 pb-6 pt-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary border-b border-border/50 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex h-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold"
            >
              Hire Me!
            </a>
          </div>
        )}
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden pt-20"
        >
          {/* Background blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl grid md:grid-cols-2 items-center gap-12 px-6 py-20">
            {/* Left */}
            <div className="order-2 md:order-1 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Available for projects
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-sans text-balance">
                {"I am "}
                <span className="text-primary">Sherif</span>
                <br />
                Full-Stack Developer +{" "}
                <span className="text-primary">WordPress Expert</span>
              </h1>

              <p className="max-w-lg text-muted-foreground leading-relaxed">
                Building scalable, modern web solutions that blend design with
                performance. Specializing in React, Next.js, Node.js, and
                WordPress development for international clients.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Work With Me! <Download size={16} />
                </a>
                <div className="flex items-center gap-3">
                  {[
                    { Icon: Github, href: "https://github.com/sherifyusuff", name: "github" },
                    { Icon: Twitter, href: "https://twitter.com/sherifyusuff", name: "twitter" },
                    { Icon: Linkedin, href: "https://linkedin.com/in/sherif-yusuff-381b1495", name: "linkedin" },
                    { Icon: Facebook, href: "https://facebook.com/sherifyusuff", name: "facebook" },
                    { Icon: MessageCircle, href: "https://wa.me/2347035321179", name: "whatsapp" },
                  ].map(({ Icon, href, name }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Floating stats */}
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { n: "3+", label: "Years Exp." },
                  { n: "50+", label: "Projects" },
                  { n: "30+", label: "Happy Clients" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-3 rounded-2xl bg-card px-5 py-3 shadow-sm border border-border"
                  >
                    <span className="text-xl font-bold text-primary font-sans">{s.n}</span>
                    <span className="text-xs text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="relative h-80 w-80 sm:h-96 sm:w-96 overflow-hidden rounded-[2rem] border-4 border-primary/20 shadow-2xl">
                  <Image
                    src={PROFILE_IMAGE}
                    alt="Sherif Yusuff"
                    fill
                    sizes="(max-width: 640px) 320px, 384px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-2xl bg-card px-4 py-3 shadow-lg border border-border">
                  <p className="text-xs text-muted-foreground">Status</p>
                  <p className="font-bold text-sm text-primary font-sans">Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <ChevronDown size={20} className="text-muted-foreground" />
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <AnimatedSection id="about" className="py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionTitle highlight="About" rest="Me" />

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="flex justify-center">
                <div className="relative h-80 w-72 sm:h-96 sm:w-80 overflow-hidden rounded-[2rem] border-4 border-primary/20 shadow-xl">
                  <Image
                    src={PROFILE_IMAGE}
                    alt="Sherif Yusuff"
                    fill
                    priority
                    sizes="(max-width: 640px) 288px, 320px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="space-y-5">
                <h3 className="text-xl font-bold font-sans text-foreground">
                  Who Am I?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a Full-Stack Web Developer and WordPress specialist,
                  focusing on both digital platforms and modern web solutions. I
                  find great fulfillment in turning complex problems into designs
                  that are not only visually attractive but also intuitive to
                  use.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My core goal is to deliver your message and brand identity in
                  the most engaging way possible. Throughout my career, I have
                  had the opportunity to collaborate with well-known brands,
                  producing web experiences that strengthen their connection with
                  audiences on a meaningful level.
                </p>

                <h3 className="text-xl font-bold font-sans text-foreground pt-2">
                  Personal Info
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Phone, label: "Phone", value: "+234 703 532 1179" },
                    { icon: Mail, label: "Email", value: "sherifyusuff25@gmail.com" },
                    { icon: Calendar, label: "Experience", value: "3+ Years" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl bg-card p-3 border border-border shadow-sm"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ===== SERVICES ===== */}
        <AnimatedSection id="services" className="py-24 px-6 bg-secondary/50">
          <div className="mx-auto max-w-6xl">
            <SectionTitle highlight="What" rest="I Offer!" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group rounded-2xl bg-card p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold font-sans text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ===== PROJECTS ===== */}
        <AnimatedSection id="projects" className="py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionTitle highlight="My" rest="Projects" />

            <div className="grid sm:grid-cols-2 gap-8">
              {projects.map((p, i) => (
                <div
                  key={p.title}
                  className="group overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      priority={i < 2}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="Source code"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold font-sans text-foreground">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ===== SKILLS ===== */}
        <AnimatedSection id="skills" className="py-24 px-6 bg-secondary/50">
          <div className="mx-auto max-w-3xl">
            <SectionTitle highlight="My" rest="Skills" />

            <div className="grid gap-5">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-foreground">{s.name}</span>
                    <span className="text-xs font-sans text-primary">{s.pct}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ===== TESTIMONIALS ===== */}
        <AnimatedSection id="testimonials" className="py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionTitle highlight="What" rest="Clients Say" />

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="relative rounded-2xl bg-card p-6 border border-border shadow-sm"
                >
                  <Quote size={28} className="text-primary/20 mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm font-sans">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ===== CONTACT ===== */}
        <AnimatedSection id="contact" className="py-24 px-6 bg-secondary/50">
          <div className="mx-auto max-w-6xl">
            <SectionTitle highlight="Let's" rest="Work Together" />

            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value
                  const subject = (form.elements.namedItem("subject") as HTMLInputElement).value
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value
                  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`
                  window.open(`mailto:sherifyusuff25@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`)
                }}
                className="space-y-5 rounded-2xl bg-card p-8 border border-border shadow-sm"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project subject"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Send Message <Send size={16} />
                </button>
              </form>

              {/* Info */}
              <div className="space-y-6">
                <div className="rounded-2xl bg-card p-6 border border-border shadow-sm space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: "sherifyusuff25@gmail.com", href: "mailto:sherifyusuff25@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+234 703 532 1179", href: "tel:+2347035321179" },
                    { icon: MessageCircle, label: "WhatsApp", value: "+234 703 532 1179", href: "https://wa.me/2347035321179" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-primary/10 p-6 border border-primary/20">
                  <h3 className="font-bold text-foreground font-sans mb-2">
                    Open for Opportunities
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I am currently available for freelance projects and full-time
                    remote roles. Let us build something amazing together.
                  </p>
                </div>

                <div className="flex gap-3">
                  {[
                    { Icon: Github, href: "https://github.com/sherifyusuff", name: "github" },
                    { Icon: Linkedin, href: "https://linkedin.com/in/sherif-yusuff-381b1495", name: "linkedin" },
                    { Icon: Twitter, href: "https://twitter.com/sherifyusuff", name: "twitter" },
                    { Icon: Facebook, href: "https://facebook.com/sherifyusuff", name: "facebook" },
                    { Icon: MessageCircle, href: "https://wa.me/2347035321179", name: "whatsapp" },
                  ].map(({ Icon, href, name }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-card border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border bg-card py-10 px-6">
        <div className="mx-auto max-w-6xl text-center space-y-4">
          <p className="text-muted-foreground italic max-w-xl mx-auto leading-relaxed text-pretty">
            {'"'}Great design begins with understanding the heart of a brand. I
            believe in creating visuals that go beyond aesthetics, carrying
            meaning and purpose.{'"'}
          </p>
          <div className="flex justify-center gap-4">
            {[
              { Icon: Github, href: "https://github.com/sherifyusuff", name: "github" },
              { Icon: Linkedin, href: "https://linkedin.com/in/sherif-yusuff-381b1495", name: "linkedin" },
              { Icon: Twitter, href: "https://twitter.com/sherifyusuff", name: "twitter" },
              { Icon: Facebook, href: "https://facebook.com/sherifyusuff", name: "facebook" },
              { Icon: MessageCircle, href: "https://wa.me/2347035321179", name: "whatsapp" },
            ].map(({ Icon, href, name }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sherif Yusuff. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
