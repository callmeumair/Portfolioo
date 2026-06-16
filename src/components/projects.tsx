"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Globe, ArrowUpRight } from "lucide-react"
import { useRef } from "react"

const projects = [
  {
    title: "SwiftAgent Evaluator",
    description: "SwiftAgent Evaluator is an enterprise-grade AI agent evaluation and benchmarking platform designed to measure, compare, and optimize LLM-powered agents. It provides comprehensive testing workflows, performance analytics, automated evaluation pipelines, and mission-control style dashboards that help teams validate agent reliability, accuracy, and production readiness at scale.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion", "Vercel"],
    liveUrl: "https://swift-agent-evaluator.vercel.app",
    githubUrl: "https://github.com/callmeumair/SwiftAgent-Evaluator",
    category: "AI Infrastructure / Developer Tools",
    number: "01",
    flagship: true,
  },
  {
    title: "Commute Timely",
    description: "Real-time AI-powered commute prediction app. Launching on App Store & Play Store in Feb 2026. Features intelligent routing and predictive analytics.",
    technologies: ["React Native", "AI/ML", "Node.js", "Google Maps API"],
    liveUrl: "https://commutetimely.com",
    githubUrl: "#",
    category: "Mobile / AI",
    number: "02",
    flagship: false,
  },
  {
    title: "PulseFit AI",
    description: "Advanced fitness coaching platform powered by AI. Personalized workout plans and real-time form analysis.",
    technologies: ["Next.js", "Python", "OpenAI API", "Tailwind CSS"],
    liveUrl: "https://pulsefitai.vercel.app/",
    githubUrl: "https://github.com/callmeumair/PulseFit.AI",
    category: "Health / AI",
    number: "03",
    flagship: false,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured shopping platform with payments, inventory management, and admin dashboard.",
    technologies: ["React", "Firebase", "Stripe", "Redux"],
    liveUrl: "https://ecom-web3.vercel.app/",
    githubUrl: "https://github.com/callmeumair/E-Commerce",
    category: "E-Commerce",
    number: "04",
    flagship: false,
  },
  {
    title: "Social Media App",
    description: "Real-time social platform with messaging, profiles, and content sharing features.",
    technologies: ["MERN Stack", "Socket.io", "MongoDB"],
    liveUrl: "https://umerpatel.vercel.app/#",
    githubUrl: "https://github.com/callmeumair/Social-Media-App",
    category: "Social Platform",
    number: "05",
    flagship: false,
  },
  {
    title: "Web3 Token dApp",
    description: "Decentralized application for token management and smart contract interaction.",
    technologies: ["React Native", "Web3.js", "Solidity"],
    liveUrl: "https://web3-app1.vercel.app/",
    githubUrl: "https://github.com/callmeumair/web3",
    category: "Blockchain",
    number: "06",
    flagship: false,
  },
  {
    title: "Car Rental System",
    description: "Booking management system with real-time availability and pricing engines.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://car-web-orpin.vercel.app/",
    githubUrl: "https://github.com/callmeumair/Car-rental",
    category: "SaaS",
    number: "07",
    flagship: false,
  }
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1])

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity,
        position: 'sticky',
        top: `${100 + index * 30}px`,
        zIndex: index,
      }}
      className="mb-8 last:mb-0"
    >
      <div
        className="rounded-3xl overflow-hidden transition-all duration-500 group"
        style={{
          background: project.flagship ? '#141414' : '#111111',
          border: `1px solid ${project.flagship ? 'rgba(187,204,215,0.12)' : 'rgba(255,255,255,0.06)'}`,
          boxShadow: project.flagship ? '0 0 80px rgba(187,204,215,0.03)' : 'none',
        }}
      >
        <div className={`${project.flagship ? 'p-10 md:p-16' : 'p-8 md:p-12'}`}>
          {/* Top Row: Number + Category + Links */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <span
                className="text-gradient-accent font-bold"
                style={{ fontSize: project.flagship ? 'clamp(2rem, 4vw, 3.5rem)' : 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                {project.number}
              </span>
              <div className="flex items-center gap-3">
                <span
                  className="text-sm font-light tracking-wider uppercase"
                  style={{ color: 'rgba(215,226,234,0.45)' }}
                >
                  {project.category}
                </span>
                {project.flagship && (
                  <span
                    className="text-[10px] font-medium tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      background: 'linear-gradient(180deg, rgba(100,105,115,0.3), rgba(187,204,215,0.15))',
                      color: '#BBCCD7',
                      border: '1px solid rgba(187,204,215,0.15)',
                    }}
                  >
                    FLAGSHIP
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full transition-all duration-300"
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(215,226,234,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                    e.currentTarget.style.color = '#D7E2EA'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = 'rgba(215,226,234,0.5)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                  aria-label="Visit Live Site"
                >
                  <Globe className="h-4 w-4" />
                </a>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full transition-all duration-300"
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(215,226,234,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                    e.currentTarget.style.color = '#D7E2EA'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = 'rgba(215,226,234,0.5)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                  aria-label="View Code"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Title */}
          <h3
            className="font-bold mb-4 tracking-tight"
            style={{
              fontSize: project.flagship ? 'clamp(2rem, 4.5vw, 3.5rem)' : 'clamp(1.5rem, 3vw, 2.5rem)',
              color: '#D7E2EA',
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="font-light leading-relaxed mb-8 max-w-3xl"
            style={{
              color: 'rgba(215,226,234,0.6)',
              fontSize: project.flagship ? '1.1rem' : '1rem',
            }}
          >
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-light tracking-wide"
                style={{
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: 'rgba(215,226,234,0.55)',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2
              className="font-bold tracking-tight mb-4 text-gradient-accent"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1 }}
            >
              Selected Works
            </h2>
            <p
              className="text-lg max-w-xl font-light"
              style={{ color: 'rgba(215,226,234,0.55)' }}
            >
              A curated selection of projects that demonstrate my passion for building robust digital solutions.
            </p>
          </div>
          <a
            href="https://github.com/callmeumair"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-sm font-light transition-all duration-300"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(215,226,234,0.65)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = '#D7E2EA'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.color = 'rgba(215,226,234,0.65)'
            }}
          >
            View Github <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Sticky Scroll Cards */}
        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Mobile Github Link */}
        <div className="mt-12 text-center md:hidden">
          <a
            href="https://github.com/callmeumair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-light"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(215,226,234,0.65)',
            }}
          >
            View Github <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
