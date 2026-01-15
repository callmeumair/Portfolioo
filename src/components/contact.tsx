"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GradientBlob } from "@/components/ui/gradient-blob"

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
      {/* Animated Background Blobs */}
      <GradientBlob className="top-0 left-1/4" color="purple" size="xl" />
      <GradientBlob className="bottom-0 right-1/4" color="pink" size="xl" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 backdrop-blur-sm border border-primary/20"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Let&apos;s Work Together</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
            className="lg:col-span-2 space-y-8"
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
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="group relative block p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

                  <div className="relative flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                      <p className="text-muted-foreground text-sm mb-1">{info.description}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
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
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10"
            >
              <h4 className="font-semibold mb-4 text-lg">Connect With Me</h4>
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
                    className="group relative p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/20 hover:to-primary/10 border border-white/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
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
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-2xl">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-3xl pointer-events-none" />

              <div className="relative">
                <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                <p className="text-muted-foreground mb-8">I typically respond within 24 hours</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12 bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email Address</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry / Collaboration / Question"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="h-12 bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, idea, or just say hello..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="resize-none bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 transition-all backdrop-blur-sm"
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

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  )
}
