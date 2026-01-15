"use client"

import { motion } from "framer-motion"
import { Code, Lightbulb, Zap, Flag, Monitor } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Experience", value: "3+", suffix: "Years", icon: Flag },
  { label: "Projects", value: "50", suffix: "+", icon: Code },
  { label: "Commits", value: "2k", suffix: "+", icon: Zap },
  { label: "Satisfied Clients", value: "25", suffix: "+", icon: Users },
]

import { Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A closer look at who I am and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Driven by curiosity, fueled by coffee.
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey into tech started with a simple website edit and evolved into a full-blown obsession with building scalable web applications. I love solving complex problems and turning abstract ideas into functional, beautiful software.
              </p>
              <p>
                I specialize in the functionality of the MERN stack and Next.js, but I&apos;m always exploring new tools. I believe in writing code that is not only functional but also clean, maintainable, and accessible.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring the latest in AI, contributing to open source, or gaming.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <Monitor className="h-5 w-5" />
                </div>
                <span className="font-medium">Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <span className="font-medium">Problem Solving</span>
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
                <Card className="h-full border-border/50 hover:border-primary/20 transition-colors">
                  <CardContent className="p-6 flex flex-col items-center text-center justify-center h-full">
                    <stat.icon className="h-8 w-8 text-primary mb-4 opacity-80" />
                    <div className="text-3xl font-bold mb-1">
                      {stat.value}<span className="text-primary text-xl ml-0.5">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
