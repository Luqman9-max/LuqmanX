"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useMousePosition } from "@/lib/hooks/useMousePosition"
import { Activity, Server, Cpu, Database } from "lucide-react"
import { CountUp } from "@/components/effects/CountUp"

export function LandingHeroVisual() {
  const { x, y } = useMousePosition()
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  // Calculate tilt based on mouse position relative to container
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 })
  
  React.useEffect(() => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    // Check if mouse is near the terminal
    if (x >= rect.left - 100 && x <= rect.right + 100 && y >= rect.top - 100 && y <= rect.bottom + 100) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const tiltX = (y - centerY) / 20
      const tiltY = (centerX - x) / 20
      
      setTilt({ x: tiltX, y: tiltY })
    } else {
      setTilt({ x: 0, y: 0 })
    }
  }, [x, y])

  return (
    <motion.div
      ref={containerRef}
      className="relative z-10 w-full max-w-lg mx-auto lg:mx-0"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        perspective: "1000px"
      }}
    >
      <motion.div
        className="w-full bg-dark-900/80 backdrop-blur-xl border border-dark-700 rounded-3xl p-8 shadow-2xl shadow-orange-500/10 flex flex-col items-center"
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        {/* Top: Status Ring */}
        <div className="relative w-48 h-48 mb-8">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background ring */}
            <circle 
              cx="50" cy="50" r="45" 
              fill="none" 
              stroke="rgba(255,255,255,0.05)" 
              strokeWidth="2"
            />
            {/* Animated foreground ring */}
            <motion.circle 
              cx="50" cy="50" r="45" 
              fill="none" 
              stroke="url(#orange-purple-gradient)" 
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 300" }}
              animate={{ strokeDasharray: "283 300" }}
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
            />
            <defs>
              <linearGradient id="orange-purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-display font-bold text-white mb-1">100%</div>
            <div className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">System Online</div>
          </div>
          
          {/* Inner pulse */}
          <motion.div 
            className="absolute inset-8 rounded-full bg-orange-500/10 blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        {/* Middle: Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 w-full mb-8">
          <div className="bg-dark-950 rounded-xl p-4 border border-dark-800 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Server className="w-5 h-5 text-orange-500 mb-2" />
            <div className="text-xl font-bold text-white flex items-center">
              <CountUp to={99} />.9%
            </div>
            <div className="text-[10px] font-mono text-neutral-500">Uptime</div>
          </div>
          
          <div className="bg-dark-950 rounded-xl p-4 border border-dark-800 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Database className="w-5 h-5 text-purple-500 mb-2" />
            <div className="text-xl font-bold text-white flex items-center">
              <CountUp to={15} />+
            </div>
            <div className="text-[10px] font-mono text-neutral-500">Projects</div>
          </div>
          
          <div className="bg-dark-950 rounded-xl p-4 border border-dark-800 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Cpu className="w-5 h-5 text-blue-500 mb-2" />
            <div className="text-xl font-bold text-white flex items-center">
              <CountUp to={8} />+
            </div>
            <div className="text-[10px] font-mono text-neutral-500">Tech Stack</div>
          </div>
        </div>
        
        {/* Bottom: Activity Graph */}
        <div className="w-full bg-dark-950 rounded-xl p-4 border border-dark-800">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-4 h-4 text-neutral-400" />
            <div className="text-xs font-mono text-neutral-400">Network Activity</div>
            <div className="ml-auto w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          </div>
          <div className="h-12 flex items-end gap-1">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div 
                key={i}
                className="flex-1 bg-gradient-to-t from-dark-800 to-dark-700 rounded-sm"
                initial={{ height: "10%" }}
                animate={{ height: `${Math.max(20, Math.random() * 100)}%` }}
                transition={{ 
                  duration: 0.5, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  delay: i * 0.05
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Decorative tech elements around terminal */}
      <motion.div 
        className="absolute -right-6 top-1/4 px-4 py-2 bg-dark-900 border border-dark-700 rounded-full text-xs font-mono text-orange-500 shadow-xl flex items-center gap-2 backdrop-blur-md"
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          x: { delay: 1.5, duration: 0.5 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        Connected
      </motion.div>
      
      <motion.div 
        className="absolute -left-8 bottom-1/3 px-4 py-2 bg-dark-900 border border-dark-700 rounded-full text-xs font-mono text-purple-500 shadow-xl flex items-center gap-2 backdrop-blur-md"
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.8, duration: 0.5 },
          x: { delay: 1.8, duration: 0.5 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      >
        <Server className="w-3 h-3" />
        Syncing...
      </motion.div>
    </motion.div>
  )
}
