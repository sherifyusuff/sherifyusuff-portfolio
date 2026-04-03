import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { skills } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Skills | Sherif Yusuff",
  description:
    "Review Sherif Yusuff's core skills across React, Next.js, TypeScript, WordPress, backend development, and modern web delivery.",
}

export default function SkillsPage() {
  return (
    <main className="section-shell">
      <div className="mx-auto max-w-5xl space-y-8 sm:space-y-10">
        <Reveal className="max-w-4xl space-y-3">
          <p className="section-eyebrow">Skills</p>
          <h1 className="section-title">
            A practical skill set shaped by real client work and product delivery.
          </h1>
          <p className="section-lead">
            My strongest capabilities combine frontend craft, content-friendly architecture, ecommerce
            execution, and maintainable delivery choices that support long-term business value.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Frontend quality",
              text: "Clean interfaces, stronger responsiveness, and better layout rhythm.",
            },
            {
              title: "Platform flexibility",
              text: "Experience across custom React and Next.js builds and WordPress delivery.",
            },
            {
              title: "Delivery mindset",
              text: "Maintainability, speed, and practical business usefulness drive implementation.",
            },
          ].map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 70}
              className="interactive-card rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <h2 className="text-lg font-bold text-foreground">{item.title}</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-7">
          <div className="grid gap-5">
            {skills.map((skill, index) => (
              <Reveal key={skill.name} delay={index * 45}>
                <div className="mb-1.5 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-foreground sm:text-sm">{skill.name}</span>
                  <span className="shrink-0 text-[11px] font-semibold text-primary">{skill.pct}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${skill.pct}%` }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="rounded-3xl border border-primary/20 bg-primary/10 p-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">More than a list of tools</h2>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            These skills represent hands-on delivery across client-facing websites and digital products.
            What matters most is how they combine to create coherent and useful experiences.
          </p>
        </Reveal>
      </div>
    </main>
  )
}
