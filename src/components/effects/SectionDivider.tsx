"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionDividerProps {
  className?: string
}

export function SectionDivider({ className }: SectionDividerProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <div ref={ref} className={cn("w-full flex justify-center py-10", className)}>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent w-full max-w-4xl relative"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-sm"
          animate={{ x: ["-200%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  )
}
