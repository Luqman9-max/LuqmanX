"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { MotionReveal } from "@/components/effects/MotionReveal"
import { TextReveal } from "@/components/effects/TextReveal"

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  label: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  count?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  count,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <MotionReveal
      stagger
      className={cn(
        "flex flex-col gap-5 mb-16 relative z-10",
        align === "center" && "items-center text-center mx-auto",
        className
      )}
      {...(props as any)}
    >
      {/* Number Badge (Optional) */}
      {count && (
        <MotionReveal variant="scaleIn" className="absolute -top-12 -left-6 md:-top-16 md:-left-12 -z-10 opacity-10 select-none">
          <span className="text-8xl md:text-9xl font-display font-bold text-white text-outline">{count}</span>
        </MotionReveal>
      )}

      {/* Label with animated line */}
      <MotionReveal variant="fadeLeft" className={cn("flex items-center gap-4", align === "center" && "justify-center")}>
        <div className="flex items-center gap-2">
          <span className="font-mono text-orange-500 text-sm tracking-widest uppercase">
            // <TextReveal mode="char" delay={200}>{label}</TextReveal>
          </span>
          <motion.span 
            className="w-1.5 h-4 bg-orange-500 inline-block"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.div 
          className="h-px bg-gradient-to-r from-orange-500/50 to-transparent w-12 hidden md:block"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
      </MotionReveal>
      
      {/* Title with clip reveal */}
      <MotionReveal variant="clipRevealBottom">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-100 leading-[1.1] tracking-tight">
          {title}
        </h2>
      </MotionReveal>
      
      {/* Description */}
      {description && (
        <MotionReveal variant="fadeUp" delay={200}>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mt-2 leading-relaxed">
            {description}
          </p>
        </MotionReveal>
      )}
    </MotionReveal>
  )
}
