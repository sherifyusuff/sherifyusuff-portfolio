import type { Metadata } from "next"
import { skills } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Skills | Sherif Yusuff",
  description:
    "Review Sherif Yusuff's core skills across React, Next.js, TypeScript, WordPress, backend development, and modern web delivery.",
}

export default function SkillsPage() {
  return (
    <main className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Skills</p>
          <h1 className="text-4xl font-bold leading-[1.02] text-balance text-foreground md:text-6xl">
            A practical skill set shaped by real client work and product delivery.
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            My strongest skills sit at the intersection of frontend craft, content-friendly
            website architecture, ecommerce execution, and delivery choices that keep projects
            maintainable over time. The focus is not only on what can be built, but how well it
            can support the brand or business using it.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Frontend quality",
              text: "Clean interfaces, strong responsiveness, and a sharper attention to layout rhythm and usability.",
            },
            {
              title: "Platform flexibility",
              text: "Experience across custom React and Next.js builds as well as WordPress-based business websites.",
            },
            {
              title: "Delivery mindset",
              text: "A practical approach to implementation that values maintainability, speed, and business usefulness.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="grid gap-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                  <span className="shrink-0 text-xs font-semibold text-primary">{skill.pct}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${skill.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-primary/20 bg-primary/10 p-8">
          <h2 className="text-2xl font-bold text-foreground">More than a list of tools</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            These skills reflect hands-on delivery across client-facing websites and digital
            products. What matters most is how they come together to create work that feels
            coherent, responsive, and useful in the real world.
          </p>
        </div>
      </div>
    </main>
  )
}
