"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, MessageCircle, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { buildWhatsAppUrl, navLinks, socialLinks } from "@/lib/site-data"

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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/65 bg-white/75 text-muted-foreground shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all hover:border-primary/30 hover:text-primary dark:border-border dark:bg-card/80"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  )
}

function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/70 bg-background/82 shadow-[0_14px_45px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-border/80 dark:bg-card/85"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,color-mix(in_oklch,var(--primary)_90%,white_10%),color-mix(in_oklch,var(--accent)_75%,white_25%))] text-xs font-black tracking-[0.14em] text-white shadow-[0_14px_30px_rgba(9,99,202,0.28)]">
            SY
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate font-mono text-lg font-extrabold tracking-[-0.06em] text-foreground sm:text-xl">
              <span className="text-foreground">Sherif</span>
              <span className="align-top text-primary">.</span>
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.32em] text-primary/80 sm:block">
              Yusuff Digital Studio
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-[0_12px_24px_rgba(9,99,202,0.22)]"
                    : "text-muted-foreground hover:bg-white/75 hover:text-primary dark:hover:bg-primary/10"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href="/contact"
            className="hidden h-10 items-center rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground shadow-[0_14px_30px_rgba(9,99,202,0.24)] transition-all hover:-translate-y-0.5 hover:opacity-90 md:inline-flex"
          >
            Hire Me
          </a>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/85 text-muted-foreground md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/60 bg-background/95 px-4 pb-5 pt-2 backdrop-blur-lg dark:border-border dark:bg-card/95 md:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`block border-b border-border/50 py-3.5 text-xs font-medium transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href="/contact"
            className="mt-4 flex h-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/90 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-4 text-center">
        <p className="mx-auto max-w-xl text-pretty text-sm italic leading-relaxed text-muted-foreground">
          {"\""}Great design begins with understanding the heart of a brand. I
          believe in creating visuals that go beyond aesthetics, carrying meaning
          and purpose.{"\""}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ Icon, href, name }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:text-primary"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Sherif Yusuff. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-3 right-3 z-50 inline-flex items-center gap-2 rounded-full bg-green-600 px-3 py-2.5 text-xs font-semibold text-white shadow-lg shadow-green-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500 sm:bottom-6 sm:right-6 sm:px-4 [bottom:max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <MessageCircle size={16} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="min-h-screen pt-16 sm:pt-[4.5rem]">{children}</div>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  )
}
