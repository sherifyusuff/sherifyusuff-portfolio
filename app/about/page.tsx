import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PROFILE_IMAGE, quickContact } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About | Sherif Yusuff",
  description:
    "Learn more about Sherif Yusuff, his approach to full-stack development, WordPress expertise, and the kind of digital products he builds.",
}

export default function AboutPage() {
  return (
    <main className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-14">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">About</p>
          <h1 className="text-4xl font-bold leading-[1.02] text-balance text-foreground md:text-6xl">
            I create digital experiences that are visually refined, commercially useful, and built with long-term clarity in mind.
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am a Full-Stack Web Developer and WordPress specialist focused on helping brands,
            founders, and businesses present themselves more clearly online. My work balances
            structure, aesthetics, and implementation quality so the final result feels premium
            to visitors and practical for the team managing it.
          </p>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-72 w-64 overflow-hidden rounded-[2rem] border-4 border-primary/20 shadow-xl sm:h-96 sm:w-80">
              <Image
                src={PROFILE_IMAGE}
                alt="Sherif Yusuff"
                fill
                priority
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">My approach</h2>
              <p className="leading-relaxed text-muted-foreground">
                I care about outcomes, not just screens. Every project begins with clarity:
                what the brand needs to say, what the audience needs to understand quickly,
                and how the experience should guide trust from the first interaction.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Across company websites, ecommerce stores, and dashboard products, I focus on
                performance, responsive layout systems, smooth interactions, and codebases
                that remain manageable after launch. The goal is always to deliver something
                that feels modern on the surface and dependable underneath.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {quickContact.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6">
              <h3 className="text-lg font-bold text-foreground">Looking for a dependable product partner?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I work with founders, businesses, and teams that want clean execution,
                thoughtful UX, and websites that feel intentional from the first scroll.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                Let&apos;s talk about your project
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "What I value",
              text: "Clear communication, realistic scope, and work that supports the actual goals of a business instead of just visual decoration.",
            },
            {
              title: "How I work",
              text: "I prefer a structured process with early clarity, thoughtful feedback loops, and decisions that keep the final product aligned and focused.",
            },
            {
              title: "What clients get",
              text: "A developer who thinks about presentation, responsiveness, performance, and the long-term usefulness of the site after delivery.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
