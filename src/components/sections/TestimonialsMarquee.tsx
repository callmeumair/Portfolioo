"use client"

import { motion, useReducedMotion } from "framer-motion"

const testimonials = [
  { name: "CTO, SaaS Co.", quote: "Umer elevated our UI, improved LCP by 22%, and shipped cleanly.", role: "B2B SaaS" },
  { name: "Head of Product", quote: "He turned ambiguity into a polished product experience in weeks.", role: "Fintech" },
  { name: "Founder", quote: "Design taste + engineering rigor. A rare combo.", role: "E‑commerce" },
]

export function TestimonialsMarquee() {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-label="Testimonials" className="section-y">
      <div className="container-x">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">What people say</h2>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 will-change-transform"
            animate={reduceMotion ? undefined : { x: [0, -800] }}
            transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="min-w-[320px] sm:min-w-[420px] p-5 rounded-xl glass shadow-elevated">
                <p className="text-sm sm:text-base">“{t.quote}”</p>
                <p className="mt-3 text-sm text-muted-foreground">— {t.name}, {t.role}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsMarquee


