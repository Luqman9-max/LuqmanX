"use client"

import * as React from "react"
import { motion, useAnimationFrame } from "framer-motion"
import { Layout, Server, Database, GitBranch } from "lucide-react"
import { useMousePosition } from "@/lib/hooks/useMousePosition"

export function ServiceMatrix() {
  const { x, y } = useMousePosition()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    // Increase hit area for parallax effect
    if (x >= rect.left - 200 && x <= rect.right + 200 && y >= rect.top - 200 && y <= rect.bottom + 200) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const tiltX = (y - centerY) / 40
      const tiltY = (centerX - x) / 40
      setTilt({ x: tiltX, y: tiltY })
    } else {
      setTilt({ x: 0, y: 0 })
    }
  }, [x, y])

  const nodes = [
    { id: "fe", label: "Frontend", icon: Layout, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/30", col: "col-start-1", row: "row-start-1" },
    { id: "be", label: "Backend", icon: Server, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/30", col: "col-start-3", row: "row-start-1" },
    { id: "db", label: "Database", icon: Database, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30", col: "col-start-1", row: "row-start-3" },
    { id: "e2e", label: "Integration", icon: GitBranch, color: "text-neutral-300", bg: "bg-neutral-500/10", border: "border-neutral-500/30", col: "col-start-3", row: "row-start-3" },
  ]

  // We draw lines between the cards. 
  // Node layout is a 3x3 grid where cards are at corners (1,1), (3,1), (1,3), (3,3)
  // Connections go between centers. Let's use simple SVG overlay for paths.
  return (
    <motion.div
      ref={containerRef}
      className="relative z-10 w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto aspect-square flex items-center justify-center perspective-[1000px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative w-[80%] h-[80%] border border-dark-800 bg-dark-900/40 rounded-3xl backdrop-blur-md shadow-2xl p-8"
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.05] [background-size:20px_20px] [background-image:linear-gradient(to_right,rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,1)_1px,transparent_1px)] rounded-3xl" />
        
        {/* SVG Connections Container */}
        <div className="absolute inset-8 z-0 pointer-events-none">
           <svg className="w-full h-full overflow-visible">
              <defs>
                 <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(249,115,22,0.5)" />
                    <stop offset="100%" stopColor="rgba(168,85,247,0.5)" />
                 </linearGradient>
                 <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(249,115,22,0.5)" />
                    <stop offset="100%" stopColor="rgba(59,130,246,0.5)" />
                 </linearGradient>
                 <linearGradient id="line-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
                    <stop offset="100%" stopColor="rgba(163,163,163,0.5)" />
                 </linearGradient>
                 <linearGradient id="line-grad-4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168,85,247,0.5)" />
                    <stop offset="100%" stopColor="rgba(163,163,163,0.5)" />
                 </linearGradient>
              </defs>
              
              {/* Top Horizontal */}
              <motion.line x1="20%" y1="20%" x2="80%" y2="20%" stroke="url(#line-grad-1)" strokeWidth="2" strokeDasharray="4 4" 
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
              {/* Left Vertical */}
              <motion.line x1="20%" y1="20%" x2="20%" y2="80%" stroke="url(#line-grad-2)" strokeWidth="2" strokeDasharray="4 4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.8 }} />
              {/* Bottom Horizontal */}
              <motion.line x1="20%" y1="80%" x2="80%" y2="80%" stroke="url(#line-grad-3)" strokeWidth="2" strokeDasharray="4 4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.1 }} />
              {/* Right Vertical */}
              <motion.line x1="80%" y1="20%" x2="80%" y2="80%" stroke="url(#line-grad-4)" strokeWidth="2" strokeDasharray="4 4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.4 }} />

              {/* Data Packets */}
              <motion.circle r="3" fill="#f97316" filter="drop-shadow(0 0 5px #f97316)"
                initial={{ cx: "20%", cy: "20%", opacity: 0 }}
                animate={{ cx: "80%", cy: "20%", opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }} />
              
              <motion.circle r="3" fill="#a855f7" filter="drop-shadow(0 0 5px #a855f7)"
                initial={{ cx: "80%", cy: "20%", opacity: 0 }}
                animate={{ cx: "80%", cy: "80%", opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 2.5 }} />
           </svg>
        </div>

        {/* Nodes Grid */}
        <div className="absolute inset-8 z-10 grid grid-cols-3 grid-rows-3 gap-0">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl bg-dark-950 border ${node.border} shadow-xl group hover:scale-110 hover:z-20 transition-all duration-300 ${node.col} ${node.row}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", delay: 0.3 + i * 0.15, damping: 15 }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${node.bg} ${node.color} group-hover:shadow-[0_0_15px_currentColor] transition-shadow`}>
                <node.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 group-hover:text-white transition-colors">
                {node.label}
              </span>
            </motion.div>
          ))}
          
          {/* Center Processing Node */}
          <motion.div 
            className="col-start-2 row-start-2 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="w-16 h-16 rounded-full border border-dark-700 bg-dark-900/80 flex items-center justify-center relative shadow-inner">
               <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 to-purple-500/20 animate-spin" style={{ animationDuration: "3s" }} />
               <div className="w-8 h-8 rounded-full border border-dark-600 flex items-center justify-center bg-dark-950 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
               </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
