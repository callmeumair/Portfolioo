"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { GradientBlob } from "@/components/ui/gradient-blob"

// All technologies in a single array for the marquee
const allTechnologies = [
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "Python",
  "AWS",
  "Docker",
  "Framer Motion",
  "Three.js",
  "Figma",
  "Git",
  "CI/CD",
  "Swift",
  "React",
  "Next.js",
  "Web3.js",
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Gradient Blobs */}
      <GradientBlob className="top-1/4 left-0" color="purple" size="lg" />
      <GradientBlob className="bottom-1/4 right-0" color="pink" size="lg" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Infinite Scrolling Marquee */}
        <div className="relative">
          <div className="marquee-container overflow-hidden">
            <motion.div
              className="marquee-content flex gap-4"
              animate={{
                x: [0, -1800],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* First set of technologies */}
              {allTechnologies.map((tech, index) => (
                <Badge
                  key={`tech-1-${index}`}
                  variant="secondary"
                  className="text-base px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-white/10 hover:border-white/30 whitespace-nowrap cursor-default flex-shrink-0"
                >
                  {tech}
                </Badge>
              ))}
              {/* Duplicate set for seamless loop */}
              {allTechnologies.map((tech, index) => (
                <Badge
                  key={`tech-2-${index}`}
                  variant="secondary"
                  className="text-base px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-white/10 hover:border-white/30 whitespace-nowrap cursor-default flex-shrink-0"
                >
                  {tech}
                </Badge>
              ))}
            </motion.div>
          </div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  )
}
