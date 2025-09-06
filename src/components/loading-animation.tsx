"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface LoadingAnimationProps {
  isLoading: boolean
  onComplete?: () => void
}

export function LoadingAnimation({ isLoading, onComplete }: LoadingAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!isLoading) return

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(logoRef.current, {
        scale: 0,
        rotation: -180,
        opacity: 0
      })

      gsap.set(dotsRef.current, {
        opacity: 0,
        scale: 0
      })

      // Create loading timeline
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete?.()
        }
      })

      // Logo animation
      tl.to(logoRef.current, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)"
      })

      // Dots animation
      tl.to(dotsRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.5")

      // Continuous dots animation
      tl.to(dotsRef.current, {
        y: -10,
        duration: 0.6,
        stagger: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      }, "-=0.3")

    }, containerRef)

    return () => ctx.revert()
  }, [isLoading, onComplete])

  if (!isLoading) return null

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo */}
        <div 
          ref={logoRef}
          className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
        >
          <span className="text-2xl font-bold text-white">UP</span>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) dotsRef.current[index] = el
              }}
              className="w-3 h-3 bg-primary rounded-full"
            />
          ))}
        </div>

        {/* Loading text */}
        <p className="mt-4 text-muted-foreground text-sm">Loading amazing content...</p>
      </div>
    </div>
  )
}

// Page transition component
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(pageRef.current, 
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }
      )
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef}>
      {children}
    </div>
  )
}

// Animated counter component
export function AnimatedCounter({ 
  end, 
  duration = 2, 
  className = "" 
}: { 
  end: number
  duration?: number
  className?: string 
}) {
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(counterRef.current,
        { innerText: 0 },
        {
          innerText: end,
          duration,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function() {
            if (counterRef.current) {
              counterRef.current.innerText = Math.ceil(this.targets()[0].innerText).toString()
            }
          }
        }
      )
    }, counterRef)

    return () => ctx.revert()
  }, [end, duration])

  return (
    <span ref={counterRef} className={className}>
      0
    </span>
  )
}
