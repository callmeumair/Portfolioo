"use client"

import { motion } from "framer-motion"

type ExperienceItem = {
  company: string
  role: string
  period: string
  location?: string
  summary: string
  achievements: string[]
  technologies?: string[]
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Turing",
    role: "Scientific Computing Expert (Contract, Remote)",
    period: "Oct 2026 — Present",
    location: "Remote",
    summary:
      "Design and build terminal-based scientific computing tasks in materials science for the Terminal Bench Science (TB-Science) benchmark.",
    achievements: [
      "Design and build terminal-based scientific computing tasks in materials science for the Terminal Bench Science (TB-Science) benchmark",
      "Implement numerical and data-analysis workflows in Python, including data reduction, physical modeling, and inversion problems, with deterministic and verifiable outputs",
      "Write automated verifiers, reference solutions, and task specifications that meet strict correctness and reproducibility standards",
      "Validate tasks against frontier AI models to confirm difficulty, then revise based on reviewer feedback until accepted on the evaluation platform",
      "Collaborate with project managers and pod leads to meet quality gates across multiple concurrent task batches",
    ],
    technologies: ["Python", "NumPy", "Materials Science", "Numerical Modeling", "Docker", "Terminal-Bench", "Linux"],
  },
  {
    company: "Handshake AI",
    role: "AI Model and Coding Agent Evaluator (Contract, Remote)",
    period: "Jul 2026 — Present",
    location: "Remote",
    summary:
      "Evaluate and rate frontier LLM outputs on complex software engineering tasks in Swift/SwiftUI, Python, TypeScript, and full-stack code generation, following detailed rubrics.",
    achievements: [
      "Evaluate and rate frontier LLM outputs on software engineering tasks in Swift/SwiftUI, Python, TypeScript, and full-stack code generation, following detailed rubrics",
      "Perform side-by-side model comparisons, correctness verification, and quality scoring to support RLHF and SFT data pipelines",
      "Write and review edge-case test scenarios and identify hallucinations, logic errors, and security or performance issues in AI-generated code",
      "Maintain inter-rater consistency and meet throughput and quality SLAs across concurrent evaluation projects",
    ],
    technologies: ["Swift / SwiftUI", "Python", "TypeScript", "RLHF / SFT", "Rubric Evaluation", "Prompt Engineering"],
  },
  {
    company: "Mercor / AI Research Lab",
    role: "AI Model Evaluation Contributor (Remote)",
    period: "2024 — Present",
    location: "Remote",
    summary:
      "Evaluate frontier AI model outputs on coding tasks across multiple languages and benchmark agentic coding tools on real-world engineering workflows.",
    achievements: [
      "Evaluated frontier AI model outputs on coding tasks across multiple languages for correctness, code quality, maintainability, and runtime performance",
      "Contributed structured feedback to RLHF and model assessment pipelines used to fine-tune production LLMs",
      "Benchmarked agentic coding tools (Claude Code, Cursor, Windsurf, Copilot, Codex) on real iOS and full-stack tasks to surface systematic model weaknesses",
    ],
    technologies: ["Claude Code", "Cursor", "Windsurf", "GitHub Copilot", "OpenAI Codex", "Agent Benchmarking", "RLHF"],
  },
  {
    company: "Freelance",
    role: "Full Stack & iOS Developer",
    period: "2023 — 2024",
    location: "Remote",
    summary:
      "Engineered performant web applications and mobile software using modern tech stacks and AI workflows.",
    achievements: [
      "Built and shipped CommuteTimely, an AI-powered commute planner iOS app on the App Store with real-time ETA predictions",
      "Developed custom web solutions and performant dashboards with Next.js, React, and PostgreSQL",
      "Implemented accessible UI components adhering to WCAG 2.1 guidelines and optimized performance metrics",
    ],
    technologies: ["SwiftUI", "Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
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
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1 }}
          >
            Work Experience
          </h2>
          <p
            className="text-lg font-light max-w-2xl"
            style={{ color: "rgba(215,226,234,0.55)" }}
          >
            Scientific computing, frontier AI model evaluation, and software engineering roles.
          </p>
        </motion.div>

        <div className="space-y-0">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />

              <div
                className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-16 items-start transition-all duration-300 group"
              >
                {/* Period & Location */}
                <div>
                  <span className="text-sm font-medium tracking-wider text-gradient-accent block">
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span
                      className="text-xs font-light tracking-wide mt-1 block"
                      style={{ color: "rgba(215,226,234,0.4)" }}
                    >
                      {exp.location}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  <h3
                    className="font-bold tracking-tight mb-2"
                    style={{
                      fontSize: "clamp(1.4rem, 2.8vw, 1.9rem)",
                      color: "#D7E2EA",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-lg font-medium mb-4 text-gradient-accent">
                    {exp.company}
                  </p>
                  <p
                    className="font-light leading-relaxed max-w-2xl mb-6"
                    style={{ color: "rgba(215,226,234,0.7)" }}
                  >
                    {exp.summary}
                  </p>

                  {/* Bullet achievements */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-light leading-relaxed"
                        style={{ color: "rgba(215,226,234,0.65)" }}
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#BBCCD7" }}
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies tags */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-light tracking-wide"
                          style={{
                            border: "1px solid rgba(255,255,255,0.06)",
                            color: "rgba(215,226,234,0.55)",
                            background: "rgba(255,255,255,0.02)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Divider for last item */}
              {index === EXPERIENCES.length - 1 && (
                <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
