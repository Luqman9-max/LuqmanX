"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Layout, Server, Database, Code2, Globe, Cpu } from "lucide-react"

export function ServiceConstellation() {
  const nodes = [
    { id: 1, icon: <Layout className="w-5 h-5 text-orange-500" />, x: -120, y: -80, size: "large", delay: 0 },
    { id: 2, icon: <Server className="w-4 h-4 text-purple-500" />, x: 140, y: -40, size: "medium", delay: 0.2 },
    { id: 3, icon: <Database className="w-6 h-6 text-blue-500" />, x: -60, y: 120, size: "large", delay: 0.4 },
    { id: 4, icon: <Code2 className="w-3 h-3 text-orange-400" />, x: 100, y: 100, size: "small", delay: 0.6 },
    { id: 5, icon: <Globe className="w-4 h-4 text-purple-400" />, x: -150, y: 40, size: "medium", delay: 0.8 },
    { id: 6, icon: <Cpu className="w-5 h-5 text-blue-400" />, x: 60, y: -120, size: "medium", delay: 1.0 },
  ]

  // Define connections between nodes
  const connections = [
    [1, 2], [1, 5], [1, 3],
    [2, 6], [2, 4],
    [3, 4], [3, 5],
    [4, 6]
  ]

  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center -z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60 md:opacity-100">
      <motion.div 
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {/* Draw SVG connections */}
        <svg className="absolute inset-0 w-full h-full overflow-visible">
          {connections.map(([sourceId, targetId], i) => {
            const source = nodes.find(n => n.id === sourceId)!
            const target = nodes.find(n => n.id === targetId)!
            
            return (
              <motion.line
                key={`line-${i}`}
                x1={source.x + 300} // offset to center 300,300
                y1={source.y + 300}
                x2={target.x + 300}
                y2={target.y + 300}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 + i * 0.2, ease: "easeOut" }}
              />
            )
          })}
          
          {/* Moving signal particles along paths */}
          {connections.slice(0, 4).map(([sourceId, targetId], i) => {
            const source = nodes.find(n => n.id === sourceId)!
            const target = nodes.find(n => n.id === targetId)!
            
            return (
              <motion.circle
                key={`signal-${i}`}
                r="2"
                fill={i % 2 === 0 ? "#f97316" : "#a855f7"}
                filter="drop-shadow(0 0 4px currentColor)"
                initial={{ cx: source.x + 300, cy: source.y + 300, opacity: 0 }}
                animate={{ 
                  cx: target.x + 300, 
                  cy: target.y + 300,
                  opacity: [0, 1, 1, 0] 
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2, 
                  repeat: Infinity, 
                  delay: Math.random() * 2,
                  ease: "linear" 
                }}
              />
            )
          })}
        </svg>

        {/* Draw Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className={`absolute flex items-center justify-center rounded-xl border border-dark-700 bg-dark-900/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
            style={{
              left: `calc(50% + ${node.x}px)`,
              top: `calc(50% + ${node.y}px)`,
              width: node.size === "large" ? 48 : node.size === "medium" ? 40 : 32,
              height: node.size === "large" ? 48 : node.size === "medium" ? 40 : 32,
              marginLeft: node.size === "large" ? -24 : node.size === "medium" ? -20 : -16,
              marginTop: node.size === "large" ? -24 : node.size === "medium" ? -20 : -16,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.5 + node.delay, damping: 12 }}
          >
            {/* Reverse rotation to keep icons upright while parent rotates */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              {node.icon}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
