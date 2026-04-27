"use client"

import * as React from "react"
import { motion, useSpring } from "framer-motion"
import { useMousePosition } from "@/lib/hooks/useMousePosition"

export function CursorGlow() {
  const { x, y } = useMousePosition()
  
  const springConfig = { damping: 25, stiffness: 150 }
  const cursorX = useSpring(x, springConfig)
  const cursorY = useSpring(y, springConfig)

  // Only show on desktop
  const [isVisible, setIsVisible] = React.useState(false)
  React.useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setIsVisible(true)
    }
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${cursorX.get()}px ${cursorY.get()}px, rgba(249,115,22,0.03), transparent 40%)`,
      }}
    />
  )
}
