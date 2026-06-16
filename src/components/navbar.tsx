"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Code, User, Briefcase, Zap, Mail, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollProgress } from "@/components/ui/scroll-progress"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Zap },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top >= -100 && rect.top <= 200) {
            setActiveSection(navItems.find(item => item.href === `#${section}`)?.name || "Home")
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <ScrollProgress />
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={cn(
            "flex items-center justify-between px-4 py-2 rounded-full transition-all duration-500",
            isScrolled ? "w-full max-w-2xl" : "w-full max-w-5xl"
          )}
          style={{
            background: isScrolled ? 'rgba(17,17,17,0.85)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
            border: isScrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer px-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-base font-semibold tracking-tight" style={{ color: '#D7E2EA' }}>
              UMER PATEL
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.name
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-light rounded-full transition-colors duration-200"
                  )}
                  style={{
                    color: isActive ? '#D7E2EA' : 'rgba(215,226,234,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'rgba(215,226,234,0.8)'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'rgba(215,226,234,0.5)'
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </button>
              )
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden h-9 w-9 flex items-center justify-center rounded-full transition-colors"
            style={{ color: '#D7E2EA' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'rgba(12,12,12,0.9)', backdropFilter: 'blur(8px)' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm p-6"
              style={{
                background: '#111111',
                borderLeft: '1px solid rgba(255,255,255,0.08)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-semibold" style={{ color: '#D7E2EA' }}>Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-9 w-9 flex items-center justify-center rounded-full"
                  style={{ color: 'rgba(215,226,234,0.65)' }}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "flex items-center gap-4 px-4 py-3 text-lg font-light rounded-lg transition-colors"
                    )}
                    style={{
                      color: activeSection === item.name ? '#D7E2EA' : 'rgba(215,226,234,0.5)',
                      background: activeSection === item.name ? 'rgba(255,255,255,0.04)' : 'transparent',
                    }}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
