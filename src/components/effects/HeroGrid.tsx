"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function HeroGrid() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 hero-grid opacity-30" />
      
      {/* Gradient Mask to fade edges */}
      <div className="absolute inset-0 bg-dark-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px]"
        animate={{
          x: [-20, 20, -20],
          y: [-20, 20, -20],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]"
        animate={{
          x: [20, -20, 20],
          y: [20, -20, 20],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"
        animate={{
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}
