"use client"

import { PropsWithChildren } from "react"
import { useLenisSmoothScroll } from "@/components/use-lenis"

export default function SmoothScrollProvider({ children }: PropsWithChildren) {
  useLenisSmoothScroll()
  return children
}


