"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { GlowTracker } from "@/components/effects/GlowTracker"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
  gradientAccent?: boolean
  tilt?: boolean
  variant?: "default" | "project" | "stat" | "service" | "glass"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, gradientAccent = false, tilt = false, variant = "default", children, ...props }, ref) => {
    const internalRef = React.useRef<HTMLDivElement>(null)
    // Merge refs
    const setRefs = React.useCallback(
      (node: HTMLDivElement) => {
        // @ts-ignore
        internalRef.current = node
        if (typeof ref === "function") {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      },
      [ref]
    )

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!internalRef.current || !tilt) return
      const rect = internalRef.current.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5
      x.set(xPct)
      y.set(yPct)
    }

    const handleMouseLeave = () => {
      if (!tilt) return
      x.set(0)
      y.set(0)
    }

    const Wrapper = tilt ? motion.div : "div"
    const wrapperProps = tilt
      ? {
          style: {
            rotateX,
            rotateY,
            transformStyle: "preserve-3d" as any,
          },
        }
      : {}

    return (
      <div className={cn(tilt ? "[perspective:1000px]" : "", "h-full")}>
        <Wrapper
          ref={setRefs as any}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative overflow-hidden transition-all duration-300 h-full group/card",
            // Base styles depending on variant
            {
              "bg-dark-900 border border-dark-700 rounded-xl p-6": variant === "default",
              "bg-dark-800 border border-dark-700 rounded-xl overflow-hidden": variant === "project",
              "bg-dark-900/50 border border-dark-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center": variant === "stat",
              "bg-dark-900 border border-dark-700 rounded-xl p-8 flex flex-col items-start": variant === "service",
              "glass border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-xl": variant === "glass",
            },
            // Hover states
            hoverable && {
              "hover:border-orange-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/5": variant === "default" || variant === "stat",
              "hover:border-purple-500/30": variant === "service",
              "hover:border-white/20 hover:bg-white/5": variant === "glass",
            },
            className
          )}
          {...wrapperProps}
          {...(props as any)}
        >
          {/* Animated gradient border for hoverable cards */}
          {hoverable && variant !== "glass" && variant !== "project" && (
            <div className="absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/20 z-0 [mask-image:linear-gradient(white,white)]" style={{ WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "1px" }} />
            </div>
          )}

          {gradientAccent && (
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-purple-500 z-10" />
          )}
          
          <div className="relative z-10 h-full w-full">{children}</div>
          
          {hoverable && variant !== "glass" && (
            <>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 pointer-events-none" />
              <GlowTracker color="rgba(249, 115, 22, 0.05)" size={600} />
            </>
          )}
        </Wrapper>
      </div>
    )
  }
)
Card.displayName = "Card"

export { Card }
