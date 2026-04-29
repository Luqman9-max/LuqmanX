"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"

export function GridBackground({ className }: { className?: string }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 200])
  const opacity = useTransform(scrollY, [0, 500], [0.06, 0.02])

  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden pointer-events-none perspective-[1000px] mask-fade-bottom",
        className
      )}
    >
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] rotate-x-12 origin-top"
      />
      <motion.div 
        style={{ opacity }}
        className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-orange-500 blur-[150px]"
      />
    </div>
  )
}
