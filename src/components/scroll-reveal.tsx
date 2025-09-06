"use client"

import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  distance?: string
  duration?: number
  easing?: string
  origin?: string
  reset?: boolean
  scale?: number
  opacity?: number
  rotate?: { x?: number; y?: number; z?: number }
  mobile?: boolean
  desktop?: boolean
}

export function ScrollRevealComponent({
  children,
  className = "",
  delay = 0,
  distance = "60px",
  duration = 1000,
  easing = "ease-out",
  origin = "bottom",
  reset = false,
  scale = 1,
  opacity = 0,
  rotate = { x: 0, y: 0, z: 0 },
  mobile = true,
  desktop = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (elementRef.current) {
      ScrollReveal().reveal(elementRef.current, {
        delay,
        distance,
        duration,
        easing,
        origin,
        reset,
        scale,
        opacity,
        rotate,
        mobile,
        desktop,
      })
    }

    return () => {
      ScrollReveal().clean(elementRef.current)
    }
  }, [delay, distance, duration, easing, origin, reset, scale, opacity, rotate, mobile, desktop])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

// Preset configurations for common animations
export const ScrollRevealPresets = {
  fadeUp: {
    distance: "60px",
    duration: 1000,
    easing: "ease-out",
    origin: "bottom",
    opacity: 0,
  },
  fadeDown: {
    distance: "60px",
    duration: 1000,
    easing: "ease-out",
    origin: "top",
    opacity: 0,
  },
  fadeLeft: {
    distance: "60px",
    duration: 1000,
    easing: "ease-out",
    origin: "left",
    opacity: 0,
  },
  fadeRight: {
    distance: "60px",
    duration: 1000,
    easing: "ease-out",
    origin: "right",
    opacity: 0,
  },
  scaleUp: {
    distance: "0px",
    duration: 1000,
    easing: "ease-out",
    origin: "center",
    scale: 0.8,
    opacity: 0,
  },
  rotateIn: {
    distance: "0px",
    duration: 1000,
    easing: "ease-out",
    origin: "center",
    rotate: { x: 0, y: 0, z: 180 },
    opacity: 0,
  },
  bounceIn: {
    distance: "60px",
    duration: 1200,
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    origin: "bottom",
    opacity: 0,
  },
}
