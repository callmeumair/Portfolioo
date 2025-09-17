"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

type ExperienceItem = {
  company: string
  role: string
  period: string
  summary: string
  achievements: string[]
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Acme Corp",
    role: "Full Stack Developer",
    period: "2023 — Present",
    summary: "Built performant web apps with Next.js, TypeScript, and PostgreSQL.",
    achievements: [
      "Led migration to App Router with 20% faster TTFB",
      "Implemented CI/CD and testing, cutting regressions by 35%",
      "Introduced design system with shadcn/ui",
    ],
  },
  {
    company: "Beta Labs",
    role: "Frontend Engineer",
    period: "2021 — 2023",
    summary: "Delivered motion-rich interfaces using Framer Motion and GSAP.",
    achievements: [
      "Increased conversion +12% via A/B tested UX refactors",
      "Built accessibility tooling achieving WCAG AA",
      "Drove Lighthouse to 95+ across key pages",
    ],
  },
]

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0.2, 1])

  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="experience-title" className="text-3xl sm:text-4xl font-bold">
              Experience
            </h2>
            <p className="mt-3 text-muted-foreground">
              Roles, impact, and outcomes across recent positions.
            </p>
          </div>

          <div ref={ref} className="relative">
            <motion.div
              aria-hidden
              className="absolute left-4 sm:left-6 top-0 w-px bg-border origin-top"
              style={{ height: "100%", scaleY: lineScaleY }}
            />

            <ol className="space-y-10 sm:space-y-12">
              {EXPERIENCES.map((exp, index) => (
                <li key={exp.company} className="relative pl-10 sm:pl-14">
                  <span className="sr-only">Timeline node</span>
                  <span
                    aria-hidden
                    className="absolute left-0 sm:left-2 top-2 size-3 rounded-full bg-primary shadow-[0_0_0_6px] shadow-primary/15"
                  />
                  <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                    className="glass rounded-lg p-5 sm:p-6"
                  >
                    <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="text-xl font-semibold">
                        {exp.role} · <span className="text-gradient">{exp.company}</span>
                      </h3>
                      <time className="text-sm text-muted-foreground">{exp.period}</time>
                    </header>
                    <p className="mt-3 text-muted-foreground">{exp.summary}</p>
                    <ul className="mt-4 grid gap-2">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <span aria-hidden className="mt-1 size-1.5 rounded-full bg-primary/70" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience


