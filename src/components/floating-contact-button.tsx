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
                className="fixed bottom-8 right-8 z-40 group"
                aria-label="Open contact form"
            >
                {/* Pulsing Ring */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-20" />

                {/* Button */}
                <div className="relative flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                    <span className="text-white font-semibold hidden sm:block">Say Hi!</span>
                </div>
            </motion.button>

            {/* Contact Modal */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
