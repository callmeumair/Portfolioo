"use client"

import { motion } from "framer-motion"
import { Code, Lightbulb, Flag, Monitor, Users, Zap, Terminal, Sparkles } from "lucide-react"

const stats = [
  { label: "Experience", value: "3+", suffix: "Years", icon: Flag },
  { label: "Projects", value: "50", suffix: "+", icon: Code },
  { label: "Academic GPA", value: "9.0", suffix: "/10", icon: Sparkles },
  { label: "Commits", value: "2k", suffix: "+", icon: Zap },
]

const charRevealVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.008,
    },
  },
}

const charVariant = {
  hidden: { opacity: 0, y: 8, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
}

function CharReveal({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      variants={charRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={charVariant} style={{ display: "inline" }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function About() {
  return (
    <section id="about" className="py-32 relative">
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
            className="font-bold tracking-tight mb-6 text-gradient-accent"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1 }}
          >
            About Me
          </h2>
          <p
            className="text-lg font-light"
            style={{ color: 'rgba(215,226,234,0.55)' }}
          >
            A closer look at who I am and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text Content with Character Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3
              className="text-2xl font-semibold"
              style={{ color: '#D7E2EA' }}
            >
              Scientific rigor meets AI-native software engineering.
            </h3>
            <div className="space-y-5 font-light leading-relaxed" style={{ color: 'rgba(215,226,234,0.6)' }}>
              <p>
                <CharReveal text="I specialize in building terminal-based scientific computing benchmarks, evaluating frontier AI models and coding agents, and shipping production-ready web and native iOS applications." />
              </p>
              <p>
                <CharReveal text="With deep hands-on expertise in Python numerical modeling, RLHF/SFT evaluation pipelines, and modern full-stack architectures (Next.js, TypeScript, Swift/SwiftUI), I focus on deterministic correctness, verifiable difficulty, and scalable performance." />
              </p>
              <p>
                <CharReveal text="Daily practitioner of Claude Code, Cursor, Windsurf, GitHub Copilot, and OpenAI Codex — bridging bleeding-edge AI evaluation with real-world engineering." />
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-xl"
                  style={{
                    background: 'rgba(187,204,215,0.08)',
                    color: '#BBCCD7',
                  }}
                >
                  <Terminal className="h-5 w-5" />
                </div>
                <span className="font-medium" style={{ color: '#D7E2EA' }}>Scientific Computing</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-xl"
                  style={{
                    background: 'rgba(187,204,215,0.08)',
                    color: '#BBCCD7',
                  }}
                >
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="font-medium" style={{ color: '#D7E2EA' }}>AI Model Evaluation</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div
                  className="h-full p-6 rounded-2xl flex flex-col items-center text-center justify-center transition-all duration-300"
                  style={{
                    background: '#161616',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <stat.icon className="h-7 w-7 mb-4" style={{ color: 'rgba(187,204,215,0.5)' }} />
                  <div className="text-3xl font-bold text-gradient-accent mb-1">
                    {stat.value}<span className="text-xl ml-0.5">{stat.suffix}</span>
                  </div>
                  <div className="text-sm font-light" style={{ color: 'rgba(215,226,234,0.45)' }}>{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Decorative Glow */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(187,204,215,0.03) 0%, transparent 60%)',
        }}
      />
    </section>
  )
}
