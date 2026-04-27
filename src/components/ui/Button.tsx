"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { MagneticButton } from "@/components/effects/MagneticButton"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "primary" | "secondary" | "ghost" | "gradient" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
  magnetic?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, magnetic = false, loading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const isMagnetic = magnetic || variant === "gradient" || variant === "primary"
    
    // Ripple effect logic for non-asChild buttons
    const [ripples, setRipples] = React.useState<{ x: number; y: number; id: number }[]>([])
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (asChild) return
      
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = Date.now()
      
      setRipples((prev) => [...prev, { x, y, id }])
      
      // Cleanup ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 600)
      
      if (props.onClick) props.onClick(e)
    }
    
    if (asChild) {
      return (
        <Slot
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group/btn",
            {
              "bg-orange-500 text-white hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]": variant === "primary",
              "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white": variant === "secondary",
              "border border-dark-700 bg-dark-800 text-neutral-300 hover:text-white hover:border-neutral-500": variant === "outline",
              "hover:bg-dark-800 text-neutral-300 hover:text-neutral-100": variant === "ghost",
              "bg-gradient-to-r from-orange-500 to-purple-500 text-white hover:scale-[1.02] shadow-lg shadow-orange-500/20 hover:shadow-purple-500/40 border-0 before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0)_100%)] before:bg-[length:200%_auto] hover:before:animate-[shimmer_2s_infinite_linear] before:pointer-events-none": variant === "gradient",
              "h-10 px-4 py-2": size === "default",
              "h-9 rounded-md px-3": size === "sm",
              "h-11 rounded-lg px-8 text-base": size === "lg",
              "h-12 rounded-xl px-10 text-lg": size === "lg" && variant === "gradient",
              "h-10 w-10": size === "icon",
            },
            className
          )}
          ref={ref as any}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    const ButtonInner = (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group/btn",
          {
            "bg-orange-500 text-white hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]": variant === "primary",
            "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white": variant === "secondary",
            "border border-dark-700 bg-dark-800 text-neutral-300 hover:text-white hover:border-neutral-500": variant === "outline",
            "hover:bg-dark-800 text-neutral-300 hover:text-neutral-100": variant === "ghost",
            "bg-gradient-to-r from-orange-500 to-purple-500 text-white hover:scale-[1.02] shadow-lg shadow-orange-500/20 hover:shadow-purple-500/40 border-0 before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0)_100%)] before:bg-[length:200%_auto] hover:before:animate-[shimmer_2s_infinite_linear] before:pointer-events-none": variant === "gradient",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-lg px-8 text-base": size === "lg",
            "h-12 rounded-xl px-10 text-lg": size === "lg" && variant === "gradient",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref as any}
        onClick={handleClick as any}
        disabled={loading || props.disabled}
        {...props}
      >
        <span className={cn("relative z-10 flex items-center justify-center gap-2", loading && "opacity-0")}>
          {children}
        </span>
        
        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
        
        {/* Ripples */}
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ top: ripple.y, left: ripple.x, scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute rounded-full bg-white/30 pointer-events-none w-20 h-20 -ml-10 -mt-10 z-0"
          />
        ))}
      </button>
    )

    if (isMagnetic) {
      return (
        <MagneticButton strength={0.2} className="inline-block">
          {ButtonInner}
        </MagneticButton>
      )
    }

    return ButtonInner
  }
)
Button.displayName = "Button"

export { Button }
