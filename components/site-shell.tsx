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
      className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
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
        scrolled ? "border-b border-border/80 bg-card/85 shadow-sm backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
            SY
          </span>
          <span className="truncate font-sans text-sm font-bold text-foreground sm:text-base">
            Sherif<span className="text-primary">.</span>
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
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground transition-all hover:opacity-90 md:inline-flex"
          >
            Hire Me
          </Link>
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
        <div className="border-t border-border bg-card/95 px-4 pb-5 pt-2 backdrop-blur-lg md:hidden">
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
          <Link
            href="/contact"
            className="mt-4 flex h-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground"
          >
            Hire Me
          </Link>
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
