import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { PROFILE_IMAGE, quickContact } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About | Sherif Yusuff",
  description:
    "Learn more about Sherif Yusuff, his approach to full-stack development, WordPress expertise, and the kind of digital products he builds.",
}

export default function AboutPage() {
  return (
    <main className="section-shell">
      <div className="section-container space-y-8 sm:space-y-10">
        <Reveal className="max-w-4xl space-y-3">
          <p className="section-eyebrow">About</p>
          <h1 className="section-title">
            I create digital experiences that are refined, useful, and built with long-term clarity.
          </h1>
          <p className="section-lead">
            I am a Full-Stack Web Developer and WordPress specialist helping brands and businesses
            communicate clearly online through stronger structure, polished visuals, and reliable implementation.
          </p>
        </Reveal>

        <div className="grid items-start gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex justify-center md:justify-start" delay={40}>
            <div className="relative h-60 w-52 overflow-hidden rounded-[1.75rem] border-4 border-primary/20 shadow-lg sm:h-80 sm:w-72">
              <Image
                src={PROFILE_IMAGE}
                alt="Sherif Yusuff"
                fill
                priority
                sizes="(max-width: 640px) 224px, 288px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal className="space-y-6" delay={90}>
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">My approach</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I care about outcomes, not just screens. Every project starts with clarity: what
                the brand should say, what users need to understand quickly, and how the experience
                should guide trust from the first interaction.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Across company websites, ecommerce stores, and dashboard products, I prioritize
                performance, responsive layout systems, and codebases that remain manageable after launch.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {quickContact.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={140 + index * 60}
                  className="interactive-card rounded-2xl border border-border bg-card p-4 shadow-sm"
                >
                  <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon size={18} />
                  </div>
                  <p className="text-[11px] text-muted-foreground">{item.label}</p>
                  <p className="mt-1 text-xs font-semibold text-foreground sm:text-sm">{item.value}</p>
                </Reveal>
              ))}
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
              <h3 className="text-base font-bold text-foreground">Looking for a dependable product partner?</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                I work with founders, businesses, and teams that want clean execution, thoughtful UX,
                and websites that feel intentional from the first scroll.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center text-xs font-semibold text-primary hover:underline"
              >
                Let&apos;s talk about your project
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "What I value",
              text: "Clear communication, realistic scope, and work that supports real business goals.",
            },
            {
              title: "How I work",
              text: "Structured process, thoughtful feedback loops, and decisions that keep delivery focused.",
            },
            {
              title: "What clients get",
              text: "A developer who balances presentation, responsiveness, performance, and long-term usefulness.",
            },
          ].map((item, index) => (
            <Reveal
              key={item.title}
              delay={110 + index * 70}
              className="interactive-card rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <h2 className="text-lg font-bold text-foreground">{item.title}</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}
