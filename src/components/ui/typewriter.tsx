"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
    text: string
    className?: string
    delay?: number
    speed?: number
    showCursor?: boolean
}

export function Typewriter({
    text,
    className = "",
    delay = 0,
    speed = 50,
    showCursor = true
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentIndex < text.length) {
                setDisplayedText((prev) => prev + text[currentIndex])
                setCurrentIndex((prev) => prev + 1)
            } else {
                setIsComplete(true)
            }
        }, currentIndex === 0 ? delay : speed)

        return () => clearTimeout(timeout)
    }, [currentIndex, text, delay, speed])

    return (
        <span className={className}>
            {displayedText}
            {showCursor && !isComplete && (
                <span className="inline-block w-0.5 h-5 bg-current ml-1 animate-pulse" />
            )}
        </span>
    )
}
