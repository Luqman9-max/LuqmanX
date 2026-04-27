"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { VARIANTS } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface MotionRevealProps {
  children: React.ReactNode
  className?: string
  variant?: keyof typeof VARIANTS
  delay?: number
  stagger?: boolean
  width?: "fit-content" | "100%"
}

export function MotionReveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  stagger = false,
  width = "100%",
}: MotionRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" })
  
  const selectedVariant = VARIANTS[variant]
  
  // Create a custom variant instance if delay is provided
  const actualVariant = delay > 0 ? {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...(selectedVariant.visible as any).transition,
        delay: delay / 1000 // Convert ms to s for Framer Motion
      }
    }
  } : selectedVariant

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        variants={VARIANTS.staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
        style={{ width }}
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={actualVariant}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      variants={actualVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  )
}
