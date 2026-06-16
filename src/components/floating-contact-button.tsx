"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { ContactModal } from "./contact-modal"

export function FloatingContactButton() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            {/* Floating Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-8 left-8 z-40 group"
                aria-label="Open contact form"
            >
                {/* Pulsing Ring */}
                <span
                    className="absolute inset-0 rounded-full animate-ping opacity-15"
                    style={{ background: 'linear-gradient(180deg, #646973, #BBCCD7)' }}
                />

                {/* Button */}
                <div
                    className="relative flex items-center gap-3 px-6 py-4 rounded-full transition-all duration-300"
                    style={{
                        background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
                        color: '#0C0C0C',
                        boxShadow: '0 4px 30px rgba(187,204,215,0.15)',
                    }}
                >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold hidden sm:block text-sm">Say Hi!</span>
                </div>
            </motion.button>

            {/* Contact Modal */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
