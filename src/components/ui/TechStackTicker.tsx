"use client"

import * as React from "react"
import { motion } from "framer-motion"

const technologies = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Laravel", "PHP", "MySQL", "PostgreSQL", "Git",
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", // Duplicated for seamless loop
]

export function TechStackTicker() {
  return (
    <div className="w-full overflow-hidden bg-dark-900/50 py-6 flex items-center relative">
      {/* Gradients for fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // 30 seconds for a full loop
        }}
      >
        {technologies.map((tech, i) => (
          <div 
            key={i} 
            className="flex items-center mx-8 text-neutral-500 font-mono text-sm tracking-widest uppercase hover:text-orange-500 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-dark-700 mr-4" />
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
