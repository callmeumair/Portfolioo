"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowUpRight, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { useState, useEffect } from "react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="contact" className="bg-background/20 backdrop-blur-lg border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      {/* Animated Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background/50"
            animate={{
              d: [
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                "M321.39,70c58-10.79,114.16-20,172-30,82.39-10,168.19-10,250.45,0C823.78,50,906.67,80,985.66,100c70.05,15,146.53,20,214.34,0V0H0V40A600.21,600.21,0,0,0,321.39,70Z",
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Let&apos;s build something <br />
              <span className="text-gradient-animated">amazing together.</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <MagneticButton>
                <Button size="xl" className="rounded-full text-lg h-14 px-8 glow-effect-hover" asChild>
                  <a href="mailto:umerpatel1540@gmail.com">
                    Get in touch <Mail className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" size="xl" className="rounded-full text-lg h-14 px-8" asChild>
                  <a href="https://linkedin.com/in/umerpatel" target="_blank" rel="noopener noreferrer">
                    LinkedIn <ArrowUpRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4 items-start md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex gap-4">
              <SocialLink href="https://github.com/callmeumair" icon={Github} label="GitHub" />
              <SocialLink href="https://x.com/Umerpatel11" icon={Twitter} label="Twitter" />
              <SocialLink href="https://linkedin.com/in/umerpatel" icon={Linkedin} label="LinkedIn" />
            </div>
            <p className="text-muted-foreground text-lg">
              Based in India
            </p>
            <p className="text-muted-foreground">
              Available for remote work
            </p>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {currentYear} Umer Patel. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors hover:underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors hover:underline underline-offset-4">Terms of Service</a>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <MagneticButton onClick={scrollToTop}>
            <Button
              size="icon"
              className="h-12 w-12 rounded-full shadow-lg glow-effect-hover"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </MagneticButton>
        </motion.div>
      )}

      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-purple-500/5 via-amber-500/5 to-transparent pointer-events-none" />
    </footer>
  )
}

function SocialLink({ href, icon: Icon, label }: { href: string, icon: React.ComponentType<{ className?: string }>, label: string }) {
  return (
    <motion.a
      whileHover={{ scale: 1.15, y: -4 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 relative group glow-effect-hover"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-lg -z-10" />
    </motion.a>
  )
}
