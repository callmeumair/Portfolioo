"use client"

import { motion } from "framer-motion"

interface GradientBlobProps {
    className?: string
    color?: "purple" | "pink" | "blue"
    size?: "sm" | "md" | "lg" | "xl"
    animate?: boolean
}

export function GradientBlob({
    className = "",
    color = "purple",
    size = "md",
    animate = true
}: GradientBlobProps) {
    const colors = {
        purple: "from-purple-500/30 via-purple-600/20 to-purple-700/10",
        pink: "from-pink-500/30 via-pink-600/20 to-pink-700/10",
        blue: "from-blue-500/30 via-blue-600/20 to-blue-700/10",
    }

    const sizes = {
        sm: "w-32 h-32",
        md: "w-64 h-64",
        lg: "w-96 h-96",
        xl: "w-[32rem] h-[32rem]",
    }

    return (
        <motion.div
            className={`absolute rounded-full bg-gradient-to-br ${colors[color]} ${sizes[size]} blur-3xl opacity-50 ${className}`}
            animate={animate ? {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 90, 0],
            } : {}}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    )
}
