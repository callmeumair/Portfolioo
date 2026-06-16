"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"

export function CTASection() {
    const scrollToContact = () => {
        const contactSection = document.querySelector("#contact")
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section className="relative py-40 overflow-hidden">
            {/* Ambient Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(187,204,215,0.04) 0%, transparent 60%)',
                }}
            />

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-12"
                        style={{
                            border: '1px solid rgba(255,255,255,0.08)',
                            background: 'rgba(22,22,22,0.6)',
                        }}
                    >
                        <span className="text-sm font-light" style={{ color: 'rgba(215,226,234,0.65)' }}>
                            Ready to Collaborate
                        </span>
                    </motion.div>

                    {/* Massive Typography */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                    >
                        <h2
                            className="font-black tracking-tight mb-8 leading-[0.9]"
                            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
                        >
                            <span className="text-gradient-accent block">LET&apos;S BUILD</span>
                            <span className="text-gradient-accent block">SOMETHING</span>
                            <span style={{ color: '#D7E2EA' }} className="block">GREAT</span>
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto"
                        style={{ color: 'rgba(215,226,234,0.55)' }}
                    >
                        Let&apos;s transform your vision into reality with cutting-edge technology and innovative solutions.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <MagneticButton onClick={scrollToContact}>
                            <button
                                className="group flex items-center gap-2 px-10 py-5 rounded-full font-medium text-lg transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
                                    color: '#0C0C0C',
                                }}
                            >
                                Start a Project
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </MagneticButton>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
