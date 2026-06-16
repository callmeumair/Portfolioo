"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
    const [isVisible, setIsVisible] = useState(false)
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
            style={{ scaleX, background: 'linear-gradient(90deg, #646973, #BBCCD7)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.2 }}
        />
    )
}
