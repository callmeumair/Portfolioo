"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useRef } from "react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const floatingElementsRef = useRef<HTMLDivElement[]>([])

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    // Only run GSAP animations on client side
    if (typeof window === "undefined") return

    const initGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      
      // Register GSAP plugins
      gsap.registerPlugin(ScrollTrigger)

      const ctx = gsap.context(() => {
        // Create master timeline
        const tl = gsap.timeline({ delay: 0.5 })

        // Set initial states
        gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, buttonsRef.current, socialRef.current], {
          opacity: 0,
          y: 50
        })

        gsap.set(avatarRef.current, {
          opacity: 0,
          scale: 0.8,
          rotation: -10
        })

        gsap.set(floatingElementsRef.current, {
          opacity: 0,
          scale: 0
        })

        // Animate elements in sequence
        tl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        })
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.5")
        .to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.3")
        .to(buttonsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.3")
        .to(socialRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.3")
        .to(avatarRef.current, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)"
        }, "-=0.8")
        .to(floatingElementsRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2
        }, "-=0.5")

        // Continuous floating animation for elements
        gsap.to(floatingElementsRef.current, {
          y: "random(-20, 20)",
          x: "random(-10, 10)",
          rotation: "random(-5, 5)",
          duration: "random(3, 5)",
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.5
        })

        // Parallax effect for background elements
        gsap.to(".bg-gradient", {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        })

      }, heroRef)

      return () => ctx.revert()
    }

    initGSAP()
  }, [])

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 bg-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-gradient">Umer Patel</span>
              </h1>
              <h2 ref={subtitleRef} className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground">
                Full Stack Developer
              </h2>
            </div>

            <p ref={descriptionRef} className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              I&apos;m passionate about creating innovative digital solutions and 
              beautiful user experiences. I specialize in modern web technologies 
              and love turning complex problems into simple, elegant solutions.
            </p>

            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group"
                onClick={() => scrollToNext()}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div ref={socialRef} className="flex justify-center lg:justify-start space-x-4 pt-4">
              <motion.a
                href="https://github.com/umerpatel1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/umerpatel1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="mailto:umerpatel1@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div ref={avatarRef} className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
                
                {/* Profile Image */}
                <Avatar className="w-full h-full border-4 border-border/50 shadow-2xl">
                  <AvatarImage 
                    src="/profile.jpg" 
                    alt="Umer Patel" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary text-white">
                    UP
                  </AvatarFallback>
                </Avatar>
                
                {/* Floating Elements */}
                <div
                  ref={(el) => {
                    if (el) floatingElementsRef.current[0] = el
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <span className="text-2xl">💻</span>
                </div>
                
                <div
                  ref={(el) => {
                    if (el) floatingElementsRef.current[1] = el
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <span className="text-xl">🚀</span>
                </div>

                <div
                  ref={(el) => {
                    if (el) floatingElementsRef.current[2] = el
                  }}
                  className="absolute top-1/2 -right-8 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <span className="text-lg">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
