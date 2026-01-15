"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, User, Mail, MessageSquare, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [submitMessage, setSubmitMessage] = useState('')

    const validateField = (name: string, value: string) => {
        switch (name) {
            case 'name':
                if (value.trim().length < 4) {
                    return 'Name must be at least 4 characters'
                }
                return ''
            case 'email':
                if (!value.includes('@')) {
                    return 'Email must contain @'
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return 'Please enter a valid email address'
                }
                return ''
            case 'message':
                const wordCount = value.trim().split(/\s+/).filter(word => word.length > 0).length
                if (wordCount < 10) {
                    return `Message must be at least 10 words (currently ${wordCount})`
                }
                return ''
            default:
                return ''
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        const error = validateField(name, value)
        setErrors(prev => ({ ...prev, [name]: error }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate all fields
        const nameError = validateField('name', formData.name)
        const emailError = validateField('email', formData.email)
        const messageError = validateField('message', formData.message)

        setErrors({
            name: nameError,
            email: emailError,
            message: messageError
        })

        // Stop submission if there are errors
        if (nameError || emailError || messageError) {
            setSubmitStatus('error')
            setSubmitMessage('Please fix the errors above')
            return
        }

        setIsSubmitting(true)
        setSubmitStatus('idle')
        setSubmitMessage('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    subject: "Quick Contact via Modal" // Default subject for modal submissions
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus('success')
                setSubmitMessage(data.message || "Message sent successfully!")
                setFormData({ name: "", email: "", message: "" })
                setErrors({ name: "", email: "", message: "" })

                // Close modal after 2 seconds on success
                setTimeout(() => {
                    onClose()
                    setSubmitStatus('idle')
                    setSubmitMessage('')
                }, 2000)
            } else {
                setSubmitStatus('error')
                setSubmitMessage(data.error || "Failed to send message. Please try again.")
            }
        } catch (error) {
            console.error('Contact form error:', error)
            setSubmitStatus('error')
            setSubmitMessage("Network error. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-md pointer-events-auto"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20" />

                            {/* Modal Content */}
                            <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-8 shadow-2xl">
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Header */}
                                <div className="text-center mb-8">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.1, type: "spring" }}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4"
                                    >
                                        <Sparkles className="w-4 h-4 text-purple-400" />
                                        <span className="text-sm text-purple-300 font-medium">Quick Contact</span>
                                    </motion.div>

                                    <motion.h2
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                                    >
                                        Say hi!
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-white/60"
                                    >
                                        I usually respond within 24 hours.
                                    </motion.p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name Input */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="relative"
                                    >
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none z-10">
                                            <User className="w-5 h-5" strokeWidth={2.5} />
                                        </div>
                                        <Input
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            required
                                            className={`h-14 pl-12 bg-white/5 border-white/10 focus:border-purple-500/50 rounded-2xl text-white placeholder:text-white/30 ${errors.name ? 'border-red-500/50' : ''}`}
                                        />
                                        {errors.name && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-xs text-red-400 mt-1.5 ml-1"
                                            >
                                                {errors.name}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    {/* Email Input */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="relative"
                                    >
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none z-10">
                                            <Mail className="w-5 h-5" strokeWidth={2.5} />
                                        </div>
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            required
                                            className={`h-14 pl-12 bg-white/5 border-white/10 focus:border-purple-500/50 rounded-2xl text-white placeholder:text-white/30 ${errors.email ? 'border-red-500/50' : ''}`}
                                        />
                                        {errors.email && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-xs text-red-400 mt-1.5 ml-1"
                                            >
                                                {errors.email}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    {/* Message Textarea */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="relative"
                                    >
                                        <div className="absolute left-4 top-4 text-white/70 pointer-events-none z-10">
                                            <MessageSquare className="w-5 h-5" strokeWidth={2.5} />
                                        </div>
                                        <Textarea
                                            name="message"
                                            placeholder="How can I help you?"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            required
                                            rows={5}
                                            className={`pl-12 pt-4 bg-white/5 border-white/10 focus:border-purple-500/50 rounded-2xl text-white placeholder:text-white/30 resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                                        />
                                        {errors.message && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-xs text-red-400 mt-1.5 ml-1"
                                            >
                                                {errors.message}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    {/* Status Message */}
                                    <AnimatePresence>
                                        {submitMessage && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className={`p-4 rounded-xl text-sm font-medium text-center ${submitStatus === 'success'
                                                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                                    }`}
                                            >
                                                {submitMessage}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Submit Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full h-14 text-base font-semibold bg-white hover:bg-white/90 text-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                    Sending...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    Send
                                                    <Send className="w-4 h-4" />
                                                </span>
                                            )}
                                        </Button>
                                    </motion.div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
