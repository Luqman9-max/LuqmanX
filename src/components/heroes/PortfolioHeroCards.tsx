"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Image as ImageIcon, Layout, Server, Database } from "lucide-react"

export function PortfolioHeroCards() {
  const cards = [
    {
      id: 1,
      title: "Edge Mind",
      icon: <Layout className="w-8 h-8 text-orange-500 opacity-50" />,
      color: "from-orange-500/20 to-orange-900/20",
      delay: 0.8,
      rotation: -12,
      x: -40,
      y: 20,
      z: 10
    },
    {
      id: 2,
      title: "Jarreva API",
      icon: <Server className="w-8 h-8 text-blue-500 opacity-50" />,
      color: "from-blue-500/20 to-blue-900/20",
      delay: 0.6,
      rotation: 8,
      x: 40,
      y: -10,
      z: 20
    },
    {
      id: 3,
      title: "NexGen DB",
      icon: <Database className="w-8 h-8 text-purple-500 opacity-50" />,
      color: "from-purple-500/20 to-purple-900/20",
      delay: 0.4,
      rotation: -4,
      x: 0,
      y: 0,
      z: 30
    }
  ]

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center perspective-[1200px]">
      {cards.map((card, i) => (
        <motion.div
          key={card.id}
          className={`absolute w-64 h-80 rounded-xl overflow-hidden shadow-2xl border border-dark-700 bg-dark-900 z-[${card.z}] cursor-pointer group`}
          initial={{ 
            opacity: 0, 
            x: 200, 
            y: card.y,
            rotateZ: 0,
            rotateY: 45,
            scale: 0.8
          }}
          animate={{ 
            opacity: 1, 
            x: card.x, 
            y: card.y,
            rotateZ: card.rotation,
            rotateY: 0,
            scale: 1
          }}
          whileHover={{
            scale: 1.05,
            rotateZ: 0,
            rotateY: 0,
            z: 50,
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)"
          }}
          transition={{ 
            duration: 0.8, 
            delay: card.delay,
            ease: [0.22, 1, 0.36, 1] 
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Card Header */}
          <div className="w-full h-8 bg-dark-950 border-b border-dark-800 flex items-center px-3 gap-1.5 z-20 relative">
            <div className="w-2 h-2 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
            <span className="ml-auto text-[10px] font-mono text-neutral-600 truncate max-w-[100px]">
              {card.title.toLowerCase().replace(" ", "-")}.tsx
            </span>
          </div>

          {/* Card Body */}
          <div className="relative w-full h-[calc(100%-32px)] flex flex-col items-center justify-center overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${card.color}`} />
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
            
            <motion.div 
              className="relative z-10 w-24 h-24 rounded-2xl bg-dark-950/50 backdrop-blur-sm border border-dark-700/50 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500"
            >
              {card.icon}
            </motion.div>
            
            <div className="absolute bottom-6 left-0 right-0 text-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-3 py-1 bg-dark-950/80 backdrop-blur-md rounded-full text-xs font-mono border border-dark-700">
                Preview Project
              </span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-10 right-20 w-16 h-16 border border-orange-500/20 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 border border-purple-500/20 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0, 0.1] }}
        transition={{ duration: 6, delay: 2, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}
