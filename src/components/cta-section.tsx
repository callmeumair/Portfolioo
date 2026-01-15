"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export function CTASection() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio
            canvas.height = canvas.offsetHeight * window.devicePixelRatio
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Particle system for globe effect
        const particles: Array<{
            x: number
            y: number
            z: number
            baseX: number
            baseY: number
            baseZ: number
            scale: number
        }> = []

        // Create globe particles
        const numParticles = 800
        const radius = 150

        for (let i = 0; i < numParticles; i++) {
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(Math.random() * 2 - 1)

            const x = radius * Math.sin(phi) * Math.cos(theta)
            const y = radius * Math.sin(phi) * Math.sin(theta)
            const z = radius * Math.cos(phi)

            particles.push({
                x, y, z,
                baseX: x, baseY: y, baseZ: z,
                scale: 1
            })
        }

        let rotation = 0
        let mouseX = 0
        let mouseY = 0

        // Mouse interaction
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width
            mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height
        }
        canvas.addEventListener('mousemove', handleMouseMove)

        // Animation loop
        const animate = () => {
            const width = canvas.offsetWidth
            const height = canvas.offsetHeight

            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
            ctx.fillRect(0, 0, width, height)

            rotation += 0.002
            const rotationY = mouseX * 0.5
            const rotationX = mouseY * 0.5

            // Sort particles by z-index for proper rendering
            const sortedParticles = particles.map(p => {
                // Rotate particle
                const rotatedX = p.baseX * Math.cos(rotation + rotationY) - p.baseZ * Math.sin(rotation + rotationY)
                const rotatedZ = p.baseX * Math.sin(rotation + rotationY) + p.baseZ * Math.cos(rotation + rotationY)
                const rotatedY = p.baseY * Math.cos(rotationX) - rotatedZ * Math.sin(rotationX)
                const finalZ = p.baseY * Math.sin(rotationX) + rotatedZ * Math.cos(rotationX)

                return {
                    x: rotatedX,
                    y: rotatedY,
                    z: finalZ,
                    scale: (finalZ + radius) / (2 * radius)
                }
            }).sort((a, b) => a.z - b.z)

            // Draw particles
            sortedParticles.forEach(p => {
                const screenX = width / 2 + p.x * 1.5
                const screenY = height / 2 + p.y * 1.5

                const size = 1.5 * p.scale
                const opacity = p.scale * 0.8

                // Create glow effect
                const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, size * 3)
                gradient.addColorStop(0, `rgba(16, 185, 129, ${opacity})`)
                gradient.addColorStop(0.5, `rgba(20, 184, 166, ${opacity * 0.5})`)
                gradient.addColorStop(1, 'rgba(16, 185, 129, 0)')

                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(screenX, screenY, size * 3, 0, Math.PI * 2)
                ctx.fill()

                // Core particle
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
                ctx.beginPath()
                ctx.arc(screenX, screenY, size, 0, Math.PI * 2)
                ctx.fill()
            })

            // Add some accent dots (like the orange ones in the reference)
            const time = Date.now() * 0.001
            for (let i = 0; i < 3; i++) {
                const angle = time + i * Math.PI * 0.7
                const distance = radius * 1.3
                const x = width / 2 + Math.cos(angle) * distance * 1.5
                const y = height / 2 + Math.sin(angle) * distance * 1.5

                const gradient = ctx.createRadialGradient(x, y, 0, x, y, 15)
                gradient.addColorStop(0, 'rgba(251, 146, 60, 1)')
                gradient.addColorStop(0.5, 'rgba(251, 146, 60, 0.5)')
                gradient.addColorStop(1, 'rgba(251, 146, 60, 0)')

                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(x, y, 15, 0, Math.PI * 2)
                ctx.fill()
            }

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            canvas.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    const scrollToContact = () => {
        const contactSection = document.querySelector("#contact")
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section className="relative py-32 overflow-hidden bg-black">
            {/* Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />

            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-500/20 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300 font-medium">Ready to Collaborate</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
                    >
                        Connect and let&apos;s
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400">
                            engineer excellence.
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                    >
                        Let&apos;s transform your vision into reality with cutting-edge technology and innovative solutions.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Button
                            size="xl"
                            onClick={scrollToContact}
                            className="group text-lg px-10 py-6 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
                        >
                            Start a Project
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    )
}
