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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 border-l border-white/10 md:border-none ml-2 md:ml-0"
            >
              <div className="md:grid md:grid-cols-[200px_2rem_1fr] md:gap-6 items-start">
                {/* Period (Left Side) */}
                <div className="hidden md:block text-right pt-1">
                  <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
                </div>

                {/* Timeline Dot (Center) */}
                <div className="hidden md:flex justify-center pt-2">
                  <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-background" />
                </div>

                {/* Content (Right Side) */}
                <div className="pb-8 relative">
                  {/* Mobile Period */}
                  <span className="md:hidden text-xs font-mono text-primary mb-2 block">{exp.period}</span>

                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-lg text-primary mb-2">{exp.company}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed max-w-lg">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
