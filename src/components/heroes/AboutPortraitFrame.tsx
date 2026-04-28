"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useMousePosition } from "@/lib/hooks/useMousePosition"

export function AboutPortraitFrame() {
  const { x, y } = useMousePosition()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    
    // Smooth parallax effect based on mouse distance from center of component
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Parallax limits
    const maxRotateX = 15
    const maxRotateY = 15
    
    // Calculate distance and map to rotation
    const distX = (x - centerX) / (window.innerWidth / 2)
    const distY = (y - centerY) / (window.innerHeight / 2)
    
    setRotation({
      x: -distY * maxRotateX,
      y: distX * maxRotateY
    })
  }, [x, y])

  return (
    <motion.div 
      ref={containerRef}
      className="relative z-10 w-full aspect-square max-w-sm mx-auto flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-[80%] h-[80%]"
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
        
        {/* Hexagonal container */}
        <div 
          className="absolute inset-0 bg-dark-900 overflow-hidden shadow-2xl border border-dark-700/50"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
          }}
        >
          {/* Inner image placeholder / overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-dark-900/80 to-dark-950 flex flex-col items-center justify-center">
            <div className="w-20 h-20 mb-4 border-2 border-purple-500/30 rounded-full border-t-purple-500 animate-spin" style={{ animationDuration: "3s" }} />
            <span className="font-mono text-xs text-purple-500 tracking-widest uppercase">System.User</span>
          </div>
          
          {/* Scan line effect over portrait */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
            animate={{ y: ["-100%", "500%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Orbiting fragments */}
        <motion.div
          className="absolute -inset-4 border border-dark-700 rounded-full border-l-orange-500/50 border-r-transparent border-t-transparent border-b-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -inset-8 border border-dark-700 rounded-full border-r-purple-500/50 border-l-transparent border-t-transparent border-b-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Geometric nodes */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-sm rotate-45 shadow-[0_0_10px_#f97316]" />
        <div className="absolute -bottom-4 left-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]" />
      </motion.div>
    </motion.div>
  )
}
