"use client"

import * as React from "react"
import { useMousePosition } from "@/lib/hooks/useMousePosition"
import { cn } from "@/lib/utils"

interface GlowTrackerProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  size?: number
}

export function GlowTracker({
  className,
  color = "rgba(249, 115, 22, 0.08)", // subtle orange by default
  size = 400,
  ...props
}: GlowTrackerProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { x, y } = useMousePosition()
  const [localMousePos, setLocalMousePos] = React.useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = React.useState(false)

  React.useEffect(() => {
    if (ref.current && isHovered) {
      const rect = ref.current.getBoundingClientRect()
      setLocalMousePos({
        x: x - rect.left,
        y: y - rect.top,
      })
    }
  }, [x, y, isHovered])

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("absolute inset-0 z-0 pointer-events-none transition-opacity duration-300", 
        isHovered ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        background: `radial-gradient(${size}px circle at ${localMousePos.x}px ${localMousePos.y}px, ${color}, transparent 80%)`,
      }}
      {...props}
    />
  )
}
