"use client"

import { motion } from "framer-motion"

type ExperienceItem = {
  company: string
  role: string
  period: string
  summary: string
  achievements: string[]
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2023 — Present",
    summary: "Building performant web applications for diverse clients using modern tech stacks.",
    achievements: [
      "Developed custom e-commerce solutions with Next.js and Stripe",
      "Optimized legacy React codebases, improving performance scores by 30%",
      "Implemented accessible UI components adhering to WCAG 2.1 guidelines",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2
            className="font-bold tracking-tight mb-4 text-gradient-accent"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1 }}
          >
            Work Experience
          </h2>
        </motion.div>

        <div className="space-y-0">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

              <div
                className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16 items-start transition-all duration-300 group"
              >
                {/* Period */}
                <div>
                  <span
                    className="text-sm font-medium tracking-wider text-gradient-accent"
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <div
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                >
                  <h3
                    className="font-bold tracking-tight mb-2"
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      color: '#D7E2EA',
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="text-lg font-medium mb-4 text-gradient-accent"
                  >
                    {exp.company}
                  </p>
                  <p
                    className="font-light leading-relaxed max-w-lg mb-6"
                    style={{ color: 'rgba(215,226,234,0.55)' }}
                  >
                    {exp.summary}
                  </p>
                  {/* <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul> */}
                </div>
              </div>

              {/* Bottom Divider for last item */}
              {index === EXPERIENCES.length - 1 && (
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
