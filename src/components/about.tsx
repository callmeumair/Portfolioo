"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Coffee, Lightbulb, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Projects Completed", value: "50+", icon: Code },
  { label: "Cups of Coffee", value: "1000+", icon: Coffee },
  { label: "Ideas Implemented", value: "100+", icon: Lightbulb },
  { label: "Happy Clients", value: "25+", icon: Users },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I&apos;m a passionate full-stack developer with a love for creating 
            innovative solutions and beautiful user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I started my coding journey with a curiosity about how websites work. 
                What began as a simple HTML page has evolved into a passion for 
                building complex, scalable applications that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, I&apos;ve had the opportunity to work with various 
                technologies and frameworks, always staying up-to-date with the 
                latest trends and best practices in web development.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in creating full-stack web applications using modern 
                technologies like React, Next.js, Node.js, and TypeScript. I&apos;m 
                passionate about clean code, user experience, and performance optimization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <div className="text-2xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">My Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Clean Code</h4>
              <p className="text-muted-foreground">
                I believe in writing maintainable, readable code that follows 
                best practices and industry standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">User-Focused</h4>
              <p className="text-muted-foreground">
                Every decision I make is centered around creating the best 
                possible experience for the end user.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Innovation</h4>
              <p className="text-muted-foreground">
                I&apos;m always exploring new technologies and approaches to 
                solve problems more efficiently and creatively.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
