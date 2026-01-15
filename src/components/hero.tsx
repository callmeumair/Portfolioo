"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/ui/spotlight"
import { ParticleBackground } from "@/components/ui/particle-background"
import { GradientBlob } from "@/components/ui/gradient-blob"
import { TextReveal } from "@/components/ui/text-reveal"
import { Typewriter } from "@/components/ui/typewriter"
import { MagneticButton } from "@/components/ui/magnetic-button"

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20">
      {/* Particle Background */}
      <ParticleBackground particleCount={60} />

      {/* Premium Spotlight Effects */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="rgba(168, 85, 247, 0.3)" />

      {/* Animated Gradient Blobs */}
      <GradientBlob className="top-20 -left-20" color="purple" size="xl" />
      <GradientBlob className="bottom-20 -right-20" color="pink" size="lg" />
      <GradientBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="blue" size="md" />

      {/* Enhanced Background Pattern with Mesh Gradient */}
      <div className="absolute inset-0 bg-mesh-gradient" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">

          {/* Status Badge with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm shimmer-effect"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-primary">Available for new opportunities</span>
          </motion.div>

          {/* Main Heading with Text Reveal and 3D Effect */}
          <div className="perspective-1000">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground transform-3d leading-[0.9]"
            >
              Building <TextReveal text="Exceptional" className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600 dark:from-neutral-100 dark:to-neutral-500 inline-block" delay={0.3} />{" "}
              <span className="text-gradient-animated inline-block">Digital Experiences</span>
            </motion.h1>
          </div>

          {/* Introduction with Typewriter Effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Hi, I&apos;m{" "}
            <span className="text-foreground font-semibold">
              <Typewriter text="Umer Patel" delay={800} speed={100} />
            </span>
            . A Full Stack Developer specializing in building accessible, performant, and scalable web applications requiring creative solutions.
          </motion.p>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
          >
            <MagneticButton onClick={scrollToProjects}>
              <Button size="xl" className="group text-lg px-8 rounded-full glow-effect-hover">
                View Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="outline" size="xl" className="text-lg px-8 rounded-full" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Social Links with Floating Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 pt-12"
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
      whileHover={{ scale: 1.2, y: -4 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + delay }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 floating-animation p-3 rounded-full hover:bg-white/5 backdrop-blur-sm border border-transparent hover:border-white/10"
      aria-label={label}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon className="h-6 w-6" />
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-lg opacity-0 hover:opacity-100 transition-opacity -z-10"
        whileHover={{ scale: 1.5 }}
      />
    </motion.a>
  )
}
