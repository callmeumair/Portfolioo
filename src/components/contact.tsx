"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "umerpatel1540@gmail.com",
    href: "mailto:umerpatel1540@gmail.com",
    description: "Drop me a line anytime"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
    href: "#",
    description: "Open to remote work worldwide"
  }
]

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/callmeumair",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/umerpatel",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://x.com/Umerpatel11",
    icon: Twitter,
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setSubmitMessage("Message sent successfully! I'll get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitMessage(""), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(22,22,22,0.6)',
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: '#BBCCD7' }} />
            <span className="text-sm font-light" style={{ color: 'rgba(215,226,234,0.65)' }}>Let&apos;s Work Together</span>
          </motion.div>

          <h2
            className="font-bold mb-6 text-gradient-accent tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1 }}
          >
            Get In Touch
          </h2>
          <p
            className="text-xl font-light max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(215,226,234,0.55)' }}
          >
            Have an exciting project or opportunity? I&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Left Side - Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="group relative block p-6 rounded-2xl transition-all duration-300 overflow-hidden"
                  style={{
                    background: 'rgba(22,22,22,0.6)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(12px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(187,204,215,0.15)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div className="relative flex items-start gap-4">
                    <div
                      className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: 'rgba(187,204,215,0.08)',
                        color: '#BBCCD7',
                      }}
                    >
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1" style={{ color: '#D7E2EA' }}>{info.title}</h4>
                      <p className="text-sm mb-1 font-light" style={{ color: 'rgba(215,226,234,0.45)' }}>{info.description}</p>
                      <p className="font-medium" style={{ color: '#D7E2EA' }}>{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(22,22,22,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <h4 className="font-semibold mb-4 text-lg" style={{ color: '#D7E2EA' }}>Connect With Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="group relative p-3 rounded-xl transition-all duration-300"
                    style={{
                      border: '1px solid rgba(255,255,255,0.06)',
                      background: 'rgba(255,255,255,0.02)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(187,204,215,0.2)'
                      e.currentTarget.style.background = 'rgba(187,204,215,0.08)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                    }}
                  >
                    <social.icon className="h-5 w-5" style={{ color: 'rgba(215,226,234,0.5)' }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div
              className="relative p-8 rounded-3xl"
              style={{
                background: 'rgba(22,22,22,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-2" style={{ color: '#D7E2EA' }}>Send a Message</h3>
                <p className="font-light mb-8" style={{ color: 'rgba(215,226,234,0.45)' }}>I typically respond within 24 hours</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-light" style={{ color: 'rgba(215,226,234,0.5)' }}>Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12 rounded-xl"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#D7E2EA',
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-light" style={{ color: 'rgba(215,226,234,0.5)' }}>Email Address</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 rounded-xl"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#D7E2EA',
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-light" style={{ color: 'rgba(215,226,234,0.5)' }}>Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry / Collaboration / Question"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="h-12 rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#D7E2EA',
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-light" style={{ color: 'rgba(215,226,234,0.5)' }}>Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, idea, or just say hello..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="resize-none rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#D7E2EA',
                      }}
                    />
                  </div>

                  {submitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl text-sm font-medium ${submitStatus === 'success'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}
                    >
                      {submitMessage}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    className="w-full h-14 rounded-xl text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
                      color: '#0C0C0C',
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="h-4 w-4" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(187,204,215,0.03) 0%, transparent 60%)',
        }}
      />
    </section>
  )
}
