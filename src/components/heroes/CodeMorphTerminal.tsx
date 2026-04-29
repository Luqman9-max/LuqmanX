"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useMousePosition } from "@/lib/hooks/useMousePosition"
import { Terminal, Code2, Database } from "lucide-react"

const snippets = [
  {
    name: "System.tsx",
    icon: Code2,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    code: `export function Core() {
  const [status] = useSystem()
  
  return (
    <Provider state={status}>
      <Interface />
    </Provider>
  )
}`
  },
  {
    name: "api.php",
    icon: Terminal,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    code: `Route::prefix('v1')->group(function() {
    Route::post('/auth', [Auth::class]);
    Route::get('/user', [User::class])
        ->middleware('auth:sanctum');
});`
  },
  {
    name: "schema.sql",
    icon: Database,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    code: `CREATE TABLE deployments (
  id UUID PRIMARY KEY,
  status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP,
  metadata JSONB
);`
  }
]

// Morphing text effect component
function MorphingCode({ code }: { code: string }) {
  const [displayCode, setDisplayCode] = React.useState("")
  
  React.useEffect(() => {
    let current = ""
    let i = 0
    
    // Scramble effect first, then reveal
    const interval = setInterval(() => {
      if (i < code.length) {
        current += code[i]
        setDisplayCode(current + (Math.random() > 0.5 ? "█" : ""))
        i++
      } else {
        setDisplayCode(code)
        clearInterval(interval)
      }
    }, 20) // Fast typing effect
    
    return () => clearInterval(interval)
  }, [code])

  // Simple syntax highlighting heuristic for display
  const highlightCode = (text: string) => {
    return text.split('\\n').map((line, i) => {
      // Very basic highlighting based on common keywords in our snippets
      let formattedLine = line
        .replace(/\\b(export|function|const|return|CREATE|TABLE|PRIMARY|KEY|NOT|NULL)\\b/g, '<span class="text-orange-400">$1</span>')
        .replace(/\\b(useSystem|Provider|Interface|Route|prefix|group|post|get|middleware)\\b/g, '<span class="text-purple-400">$1</span>')
        .replace(/(['"].*?['"])/g, '<span class="text-green-400">$1</span>')
        .replace(/\\b(UUID|VARCHAR|TIMESTAMP|JSONB)\\b/g, '<span class="text-blue-400">$1</span>')

      return (
        <div key={i} className="leading-relaxed">
          <span className="text-dark-700 select-none mr-4 inline-block w-4 text-right">{i + 1}</span>
          <span dangerouslySetInnerHTML={{ __html: formattedLine || " " }} />
        </div>
      )
    })
  }

  return (
    <pre className="font-mono text-sm text-neutral-300 overflow-hidden whitespace-pre-wrap">
      {highlightCode(displayCode)}
    </pre>
  )
}

export function CodeMorphTerminal() {
  const { x, y } = useMousePosition()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 })
  const [currentIndex, setCurrentIndex] = React.useState(0)

  // Tilt effect
  React.useEffect(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    if (x >= rect.left - 100 && x <= rect.right + 100 && y >= rect.top - 100 && y <= rect.bottom + 100) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      setTilt({ x: (y - centerY) / 30, y: (centerX - x) / 30 })
    } else {
      setTilt({ x: 0, y: 0 })
    }
  }, [x, y])

  // Cycle snippets
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % snippets.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const currentSnippet = snippets[currentIndex]

  return (
    <motion.div
      ref={containerRef}
      className="relative z-10 w-full max-w-lg mx-auto lg:mx-0"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full bg-dark-950/80 backdrop-blur-xl border border-dark-700 rounded-xl overflow-hidden shadow-2xl"
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-dark-900 border-b border-dark-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 flex justify-center">
            <motion.div 
              key={currentSnippet.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 px-3 py-1 bg-dark-950 rounded-md border border-dark-800"
            >
              <currentSnippet.icon className={`w-3 h-3 ${currentSnippet.color}`} />
              <span className="text-xs font-mono text-neutral-400">{currentSnippet.name}</span>
            </motion.div>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 h-[250px] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.02] to-transparent pointer-events-none" />
          <MorphingCode key={currentIndex} code={currentSnippet.code} />
        </div>
      </motion.div>

      {/* Orbiting badges */}
      {snippets.map((snippet, i) => {
        const isActive = i === currentIndex
        return (
          <motion.div
            key={snippet.name}
            className={`absolute top-1/2 left-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-700 bg-dark-900/80 backdrop-blur-md shadow-xl ${isActive ? 'z-20' : 'z-0 opacity-40 grayscale'}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isActive ? 1 : 0.4,
              x: Math.cos((i * Math.PI * 2) / snippets.length) * 180 - 40,
              y: Math.sin((i * Math.PI * 2) / snippets.length) * 140 - 20,
              scale: isActive ? 1.1 : 0.9,
            }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className={`w-2 h-2 rounded-full ${isActive ? 'animate-pulse' : ''} ${snippet.bgColor.replace('/10', '')}`} />
            <span className="text-xs font-mono text-neutral-300">{snippet.name.split('.')[1].toUpperCase()}</span>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
