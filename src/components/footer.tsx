"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowUpRight, ArrowUp } from "lucide-react"
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
    <footer
      id="contact"
      className="pt-24 pb-12 relative overflow-hidden"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(17,17,17,0.3)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-bold tracking-tight mb-8 leading-[0.95]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              <span style={{ color: '#D7E2EA' }}>Let&apos;s build something </span>
              <br />
              <span className="text-gradient-animated">amazing together.</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <MagneticButton>
                <a
                  href="mailto:umerpatel1540@gmail.com"
                  className="group flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base transition-all duration-300"
                  style={{
                    background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
                    color: '#0C0C0C',
                  }}
                >
                  Get in touch <Mail className="h-5 w-5" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="https://linkedin.com/in/umerpatel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base transition-all duration-300"
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#D7E2EA',
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
                  LinkedIn <ArrowUpRight className="h-5 w-5" />
                </a>
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
            <div className="flex gap-3">
              <SocialLink href="https://github.com/callmeumair" icon={Github} label="GitHub" />
              <SocialLink href="https://x.com/Umerpatel11" icon={Twitter} label="Twitter" />
              <SocialLink href="https://linkedin.com/in/umerpatel" icon={Linkedin} label="LinkedIn" />
            </div>
            <p className="text-lg font-light" style={{ color: 'rgba(215,226,234,0.55)' }}>
              Based in India
            </p>
            <p className="font-light" style={{ color: 'rgba(215,226,234,0.4)' }}>
              Available for remote work
            </p>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            color: 'rgba(215,226,234,0.4)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="font-light">© {currentYear} Umer Patel. All rights reserved.</p>
          <div className="flex gap-8">
            <a
              href="#"
              className="font-light transition-colors hover:underline underline-offset-4"
              onMouseEnter={(e) => e.currentTarget.style.color = '#D7E2EA'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(215,226,234,0.4)'}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-light transition-colors hover:underline underline-offset-4"
              onMouseEnter={(e) => e.currentTarget.style.color = '#D7E2EA'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(215,226,234,0.4)'}
            >
              Terms of Service
            </a>
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
            <button
              className="h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: 'linear-gradient(180deg, #646973, #BBCCD7)',
                color: '#0C0C0C',
              }}
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </MagneticButton>
        </motion.div>
      )}

      {/* Ambient Background */}
      <div
        className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(187,204,215,0.02), transparent)',
        }}
      />
    </footer>
  )
}

function SocialLink({ href, icon: Icon, label }: { href: string, icon: React.ComponentType<{ className?: string }>, label: string }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full transition-all duration-300"
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
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </motion.a>
  )
}
