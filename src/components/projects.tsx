"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollRevealComponent, ScrollRevealPresets } from "@/components/scroll-reveal"

const projects = [
  {
    title: "AI-Powered Fitness App",
    description: "A cutting-edge fitness application that revolutionizes personal training using Artificial Intelligence. Features personalized workout plans, real-time form analysis, and intelligent progress tracking with OpenAI integration.",
    image: "/fitness-app.jpg",
    technologies: ["Next.js", "React", "Python", "OpenAI API", "Machine Learning"],
    liveUrl: "https://fitness-ai-demo.vercel.app",
    githubUrl: "https://github.com/callmeumair/fitness-app",
    featured: true,
    highlights: ["AI-Powered", "Real-time Analysis", "Personalized Training", "OpenAI Integration"]
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description: "A comprehensive e-commerce solution showcasing advanced full-stack development skills. Includes secure user authentication, real-time inventory management, payment processing, and admin dashboard with analytics.",
    image: "/ecommerce.jpg",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux", "Stripe API"],
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
    githubUrl: "https://github.com/callmeumair/ecommerce-platform",
    featured: true,
    highlights: ["Full-Stack", "Payment Integration", "Real-time Updates", "Admin Dashboard"]
  },
  {
    title: "Social Media Platform",
    description: "A full-stack social media application built with the MERN stack. Features real-time messaging, user profiles, content sharing, and advanced social features with scalable architecture.",
    image: "/social-media.jpg",
    technologies: ["Next.js", "OpenAI API", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://social-media-demo.vercel.app",
    githubUrl: "https://github.com/callmeumair/social-media-app",
    featured: true,
    highlights: ["Real-time Chat", "MERN Stack", "Scalable Architecture", "AI Features"]
  },
  {
    title: "Web3 Token Application",
    description: "An innovative Web3 project exploring blockchain technologies and decentralized applications. Features token management, smart contracts, and DeFi integration with modern UI/UX.",
    image: "/web3-app.jpg",
    technologies: ["React Native", "TypeScript", "D3.js", "Firebase", "Web3.js"],
    liveUrl: "https://web3-token-demo.vercel.app",
    githubUrl: "https://github.com/callmeumair/web3-token-app",
    featured: false,
    highlights: ["Web3", "Blockchain", "Smart Contracts", "DeFi Integration"]
  },
  {
    title: "Car Rental Management System",
    description: "A comprehensive car rental web application with advanced booking system, vehicle management, and customer portal. Features real-time availability, pricing algorithms, and integrated payment processing.",
    image: "/car-rental.jpg",
    technologies: ["React", "Weather API", "Chart.js", "Styled Components", "Node.js"],
    liveUrl: "https://car-rental-demo.vercel.app",
    githubUrl: "https://github.com/callmeumair/car-rental-website",
    featured: false,
    highlights: ["Booking System", "Real-time Data", "Payment Processing", "Admin Panel"]
  },
  {
    title: "Secure Password Manager",
    description: "A highly secure password management application with end-to-end encryption, biometric authentication, and cross-platform synchronization. Features secure vault, password generator, and breach monitoring.",
    image: "/password-manager.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Encryption"],
    liveUrl: "https://password-manager-demo.vercel.app",
    githubUrl: "https://github.com/callmeumair/password-manager",
    featured: false,
    highlights: ["End-to-End Encryption", "Biometric Auth", "Cross-Platform", "Security First"]
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const projectCardsRef = useRef<HTMLDivElement[]>([])

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  useEffect(() => {
    // Only run GSAP animations on client side
    if (typeof window === "undefined") return

    const initGSAP = async () => {
      const { gsap } = await import("gsap")
      
      // Add GSAP hover animations to project cards
      projectCardsRef.current.forEach((card) => {
        if (card) {
          const tl = gsap.timeline({ paused: true })
          
          tl.to(card, {
            y: -10,
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            duration: 0.3,
            ease: "power2.out"
          })
          .to(card.querySelector(".project-image"), {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
          }, 0)
          .to(card.querySelector(".project-overlay"), {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          }, 0)

          card.addEventListener("mouseenter", () => tl.play())
          card.addEventListener("mouseleave", () => tl.reverse())
        }
      })
    }

    initGSAP()
  }, [])

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ScrollRevealComponent
              key={project.title}
              {...ScrollRevealPresets.fadeUp}
              delay={index * 200}
            >
              <Card 
                ref={(el) => {
                  if (el) projectCardsRef.current[index] = el
                }}
                className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center project-image">
                    <div className="text-6xl opacity-50">
                      {project.title.includes("Fitness") ? "💪" : 
                       project.title.includes("E-Commerce") ? "🛒" : 
                       project.title.includes("Social") ? "👥" : 
                       project.title.includes("Web3") ? "⛓️" : 
                       project.title.includes("Car") ? "🚗" : 
                       project.title.includes("Password") ? "🔐" : "🚀"}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 project-overlay flex items-center justify-center space-x-4">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  
                  {/* Project Highlights */}
                  {project.highlights && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.highlights.map((highlight) => (
                          <Badge key={highlight} variant="default" className="text-xs bg-primary/10 text-primary border-primary/20">
                            ✨ {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-2">
                    <Button variant="outline" size="sm" asChild className="group">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollRevealComponent>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ScrollRevealComponent
                key={project.title}
                {...ScrollRevealPresets.scaleUp}
                delay={index * 100}
              >
                <Card 
                  ref={(el) => {
                    if (el) projectCardsRef.current[featuredProjects.length + index] = el
                  }}
                  className="h-full group hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center project-image">
                      <div className="text-4xl opacity-50">
                        {project.title.includes("Fitness") ? "💪" : 
                         project.title.includes("E-Commerce") ? "🛒" : 
                         project.title.includes("Social") ? "👥" : 
                         project.title.includes("Web3") ? "⛓️" : 
                         project.title.includes("Car") ? "🚗" : 
                         project.title.includes("Password") ? "🔐" : "💻"}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 project-overlay flex items-center justify-center space-x-2">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollRevealComponent>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m always excited to take on new challenges and collaborate on interesting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="#contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/callmeumair" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View All Projects
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
