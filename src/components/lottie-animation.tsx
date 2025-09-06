"use client"

import { useRef, useEffect } from "react"
import Lottie from "lottie-react"

interface LottieAnimationProps {
  animationData: any
  className?: string
  loop?: boolean
  autoplay?: boolean
  speed?: number
  direction?: 1 | -1
  onComplete?: () => void
  onLoopComplete?: () => void
  onEnterFrame?: () => void
  style?: React.CSSProperties
}

export function LottieAnimation({
  animationData,
  className = "",
  loop = true,
  autoplay = true,
  speed = 1,
  direction = 1,
  onComplete,
  onLoopComplete,
  onEnterFrame,
  style,
}: LottieAnimationProps) {
  const lottieRef = useRef<any>(null)

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed)
      lottieRef.current.setDirection(direction)
    }
  }, [speed, direction])

  const defaultOptions = {
    loop,
    autoplay,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      className={className}
      loop={loop}
      autoplay={autoplay}
      style={style}
      onComplete={onComplete}
      onLoopComplete={onLoopComplete}
      onEnterFrame={onEnterFrame}
    />
  )
}

// Predefined Lottie animations (you can replace these with actual Lottie files)
export const LottieAnimations = {
  // These would be actual Lottie animation data objects
  // For now, we'll create placeholder components
  coding: null, // Replace with actual Lottie animation data
  rocket: null, // Replace with actual Lottie animation data
  success: null, // Replace with actual Lottie animation data
  loading: null, // Replace with actual Lottie animation data
}

// Placeholder component for when Lottie data is not available
export function LottiePlaceholder({ 
  className = "", 
  children 
}: { 
  className?: string
  children?: React.ReactNode 
}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children || (
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse flex items-center justify-center">
          <span className="text-white text-2xl">✨</span>
        </div>
      )}
    </div>
  )
}
