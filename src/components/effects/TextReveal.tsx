"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  mode?: "word" | "char"
}

export function TextReveal({ children, className, delay = 0, mode = "word" }: TextRevealProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" })

  const units = mode === "word" ? children.split(" ") : children.split("")

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap", className)}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.4,
            delay: delay / 1000 + i * 0.05,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block"
        >
          {unit}
          {mode === "word" && i < units.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  )
}
