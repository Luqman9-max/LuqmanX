"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface LineDrawSVGProps extends React.SVGProps<SVGSVGElement> {
  path: string
  color?: string
  strokeWidth?: number
}

export function LineDrawSVG({
  path,
  color = "currentColor",
  strokeWidth = 2,
  className,
  ...props
}: LineDrawSVGProps) {
  const ref = React.useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <svg
      ref={ref}
      className={cn("overflow-visible", className)}
      {...props}
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{
          pathLength: { duration: 1.5, ease: "easeInOut" },
          opacity: { duration: 0.2 },
        }}
      />
    </svg>
  )
}
