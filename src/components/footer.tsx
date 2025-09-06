"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/umerpatel1",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/umerpatel1",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:umerpatel1@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold text-gradient"
            >
              Umer Patel
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-sm"
            >
              Full-stack developer passionate about creating innovative solutions
              and beautiful user experiences.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-semibold text-foreground"
            >
              Quick Links
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <a
                href="#about"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#skills"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Contact
              </a>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-semibold text-foreground"
            >
              Connect
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex space-x-4"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200"
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Umer Patel. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground">
              Built with Next.js & Tailwind CSS
            </p>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
