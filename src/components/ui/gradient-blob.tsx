"use client"

import { motion } from "framer-motion"

interface GradientBlobProps {
    className?: string
    color?: "steel" | "silver" | "muted"
    size?: "sm" | "md" | "lg" | "xl"
    animate?: boolean
}

export function GradientBlob({
    className = "",
    color = "steel",
    size = "md",
    animate = true
}: GradientBlobProps) {
    const colors = {
        steel: "from-[#646973]/20 via-[#646973]/10 to-[#646973]/5",
        silver: "from-[#BBCCD7]/15 via-[#BBCCD7]/8 to-[#BBCCD7]/3",
        muted: "from-white/5 via-white/3 to-transparent",
    }

    const sizes = {
        sm: "w-32 h-32",
        md: "w-64 h-64",
        lg: "w-96 h-96",
        xl: "w-[32rem] h-[32rem]",
    }

    return (
        <motion.div
            className={`absolute rounded-full bg-gradient-to-br ${colors[color]} ${sizes[size]} blur-3xl opacity-50 pointer-events-none ${className}`}
            animate={animate ? {
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3],
            } : {}}
            transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    )
}
