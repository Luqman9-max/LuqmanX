"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language = "json", className }: CodeBlockProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const lines = code.trim().split("\n")

  return (
    <div 
      ref={ref}
      className={cn(
        "rounded-xl bg-[#0d1117] border border-dark-700 overflow-hidden text-sm font-mono shadow-2xl",
        className
      )}
    >
      {/* Mac window header */}
      <div className="flex items-center px-4 py-3 bg-dark-900 border-b border-dark-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 text-xs text-neutral-500">profile.{language}</div>
      </div>
      
      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {lines.map((line, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
              className="whitespace-pre flex"
            >
              <span className="text-neutral-600 select-none inline-block w-6 shrink-0 text-right mr-4">
                {i + 1}
              </span>
              <span 
                dangerouslySetInnerHTML={{ 
                  // Extremely basic syntax highlighting for demo purposes
                  __html: line
                    .replace(/(".*?"):/g, '<span class="text-purple-400">$1</span>:')
                    .replace(/: (".*?")/g, ': <span class="text-orange-400">$1</span>')
                    .replace(/: (\d+)/g, ': <span class="text-blue-400">$1</span>')
                    .replace(/(true|false)/g, '<span class="text-orange-500">$1</span>')
                }} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
