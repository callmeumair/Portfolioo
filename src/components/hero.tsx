"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { useEffect, useRef } from "react"

const charVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  }),
}

function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      style={{ perspective: 800 }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={charVariants}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const moveX = useTransform(springX, [-0.5, 0.5], [-15, 15])
  const moveY = useTransform(springY, [-0.5, 0.5], [-10, 10])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(187,204,215,0.04) 0%, rgba(100,105,115,0.02) 40%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-12"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(22,22,22,0.6)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#BBCCD7' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#BBCCD7' }}></span>
            </span>
            <span className="text-sm font-light tracking-wide" style={{ color: 'rgba(215,226,234,0.65)' }}>
              Available for new opportunities
            </span>
          </motion.div>

          {/* Massive Hero Name with Parallax */}
          <motion.div style={{ x: moveX, y: moveY }} className="mb-6">
            <AnimatedText
              text="UMER"
              className="font-black leading-[0.85] tracking-[-0.04em]"
              {...{ style: { fontSize: 'clamp(5rem, 18vw, 16rem)', color: '#D7E2EA' } }}
            />
            <AnimatedText
              text="PATEL"
              className="font-black leading-[0.85] tracking-[-0.04em]"
              {...{ style: { fontSize: 'clamp(5rem, 18vw, 16rem)', color: '#D7E2EA' } }}
            />
          </motion.div>

          {/* Subtitle with gradient */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gradient-accent font-medium tracking-[0.2em] uppercase mb-8"
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}
          >
            AI Product Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light"
            style={{ color: 'rgba(215,226,234,0.65)' }}
          >
            Full Stack Developer specializing in building accessible, performant, and scalable web applications requiring creative solutions.
          </motion.p>

          {/* CTA Buttons — MotionSites Pill Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <MagneticButton onClick={scrollToProjects}>
              <button
                className="group flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base transition-all duration-300"
                style={{
                  background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
                  color: '#0C0C0C',
                }}
              >
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>
            <MagneticButton>
              <a
                href="/resume.pdf"
                download
                className="group flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base transition-all duration-300"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#D7E2EA',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex items-center gap-4"
          >
            <SocialLink href="https://github.com/callmeumair" icon={Github} label="GitHub" delay={0} />
            <SocialLink href="https://www.linkedin.com/in/umerpatel" icon={Linkedin} label="LinkedIn" delay={0.1} />
            <SocialLink
              href="https://x.com/Umerpatel11"
              icon={(props: React.SVGProps<SVGSVGElement>) => (
                <svg {...props} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              )}
              label="X (Twitter)"
              delay={0.2}
            />
            <SocialLink href="mailto:umerpatel1540@gmail.com" icon={Mail} label="Email" delay={0.3} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon: Icon, label, delay }: { href: string, icon: React.ComponentType<{ className?: string }>, label: string, delay: number }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 + delay }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full transition-all duration-300"
      style={{
        color: 'rgba(215,226,234,0.5)',
        border: '1px solid transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#D7E2EA'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'rgba(215,226,234,0.5)'
        e.currentTarget.style.borderColor = 'transparent'
        e.currentTarget.style.background = 'transparent'
      }}
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </motion.a>
  )
}
