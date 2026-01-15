"use client"

import { motion } from "framer-motion"
import { Github, Globe, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card3D } from "@/components/ui/3d-card"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Commute Timely",
    description: "Real-time AI-powered commute prediction app. Launching on App Store & Play Store in Feb 2026. Features intelligent routing and predictive analytics.",
    technologies: ["React Native", "AI/ML", "Node.js", "Google Maps API"],
    liveUrl: "https://commutetimely.com",
    githubUrl: "#",
    icon: "🚆",
    featured: true,
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "PulseFit AI",
    description: "Advanced fitness coaching platform powered by AI. Personalized workout plans and real-time form analysis.",
    technologies: ["Next.js", "Python", "OpenAI API", "Tailwind CSS"],
    liveUrl: "https://pulsefitai.vercel.app/",
    githubUrl: "https://github.com/callmeumair/PulseFit.AI",
    icon: "💪",
    featured: true,
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured shopping platform with payments, inventory management, and admin dashboard.",
    technologies: ["React", "Firebase", "Stripe", "Redux"],
    liveUrl: "https://ecom-web3.vercel.app/",
    githubUrl: "https://github.com/callmeumair/E-Commerce",
    icon: "🛒",
    featured: false,
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Social Media App",
    description: "Real-time social platform with messaging, profiles, and content sharing features.",
    technologies: ["MERN Stack", "Socket.io", "MongoDB"],
    liveUrl: "https://umerpatel.vercel.app/#",
    githubUrl: "https://github.com/callmeumair/Social-Media-App",
    icon: "👥",
    featured: false,
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Web3 Token dApp",
    description: "Decentralized application for token management and smart contract interaction.",
    technologies: ["React Native", "Web3.js", "Solidity"],
    liveUrl: "https://web3-app1.vercel.app/",
    githubUrl: "https://github.com/callmeumair/web3",
    icon: "⛓️",
    featured: false,
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Car Rental System",
    description: "Booking management system with real-time availability and pricing engines.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://car-web-orpin.vercel.app/",
    githubUrl: "https://github.com/callmeumair/Car-rental",
    icon: "🚗",
    featured: false,
    span: "md:col-span-1 lg:col-span-1",
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Selected Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A curated selection of projects that demonstrate my passion for building robust digital solutions.
            </p>
          </div>
          <Button variant="outline" className="rounded-full hidden md:flex" asChild>
            <a href="https://github.com/callmeumair" target="_blank" rel="noopener noreferrer">
              View Github <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn("group", project.span)}
            >
              <Card3D className="h-full">
                <div className="h-full relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20 gradient-border-animated">
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <motion.div
                        className="p-3 rounded-2xl bg-white/10 text-3xl"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {project.icon}
                      </motion.div>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <motion.a
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors glow-effect-hover"
                            aria-label="Visit Live Site"
                          >
                            <Globe className="h-5 w-5" />
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors glow-effect-hover"
                            aria-label="View Code"
                          >
                            <Github className="h-5 w-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient-primary transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Badge
                            variant="secondary"
                            className="rounded-lg px-2.5 py-0.5 text-xs font-medium bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-white/10"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Decorative Gradient Blob */}
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-r from-purple-500/20 via-amber-500/20 to-purple-600/20 blur-[100px] rounded-full pointer-events-none group-hover:from-purple-500/30 group-hover:via-amber-500/30 group-hover:to-purple-600/30 transition-all duration-500" />
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="rounded-full" asChild>
            <a href="https://github.com/callmeumair" target="_blank" rel="noopener noreferrer">
              View Github <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
