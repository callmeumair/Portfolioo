"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface TextRevealProps {
    text: string
    className?: string
    delay?: number
    type?: "character" | "word"
}

export function TextReveal({ text, className = "", delay = 0, type = "word" }: TextRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [isRevealed, setIsRevealed] = useState(false)

    useEffect(() => {
        if (isInView) {
            setIsRevealed(true)
        }
    }, [isInView])

    const items = type === "character" ? text.split("") : text.split(" ")

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: type === "character" ? 0.03 : 0.08,
                delayChildren: delay,
            },
        }),
    }

    const child = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(4px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 200,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={container}
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
        >
            {items.map((item, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{ display: "inline-block" }}
                >
                    {item}
                    {type === "word" && index < items.length - 1 && "\u00A0"}
                </motion.span>
            ))}
        </motion.div>
    )
}
