"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Network, Send } from "lucide-react"

export function ContactSignalPath() {
  const [time, setTime] = React.useState<string>("")
  const [signalActive, setSignalActive] = React.useState(true)

  React.useEffect(() => {
    // Update live clock
    const updateTime = () => {
      const now = new Date()
      setTime(now.toISOString().split("T")[1].slice(0, 8) + " UTC")
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[4/3] flex items-center justify-center">
      <div className="absolute inset-0 bg-dark-900/50 backdrop-blur-xl border border-dark-700 rounded-2xl overflow-hidden flex flex-col shadow-[0_0_40px_rgba(249,115,22,0.1)]">
        
        {/* Terminal Header */}
        <div className="w-full h-10 border-b border-dark-700 bg-dark-950/80 flex items-center justify-between px-4">
          <div className="flex items-center gap-2 text-orange-500 font-mono text-xs">
            <motion.div 
              className="w-2 h-2 bg-orange-500 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            SECURE_CHANNEL
          </div>
          <div className="font-mono text-xs text-neutral-500">
            {time || "00:00:00 UTC"}
          </div>
        </div>

        {/* Signal Visualization Body */}
        <div className="flex-1 relative p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center w-full mt-4">
            {/* Source Node */}
            <div className="relative flex flex-col items-center gap-2">
              <motion.div 
                className="w-12 h-12 rounded-full border-2 border-dark-600 bg-dark-800 flex items-center justify-center z-10 cursor-pointer"
                whileHover={{ scale: 1.1, borderColor: "#f97316" }}
                onHoverStart={() => setSignalActive(true)}
              >
                <Network className="w-5 h-5 text-neutral-400" />
              </motion.div>
              <span className="font-mono text-[10px] text-neutral-500 uppercase">Client_Node</span>
              
              {/* Ripple effect */}
              {signalActive && (
                <motion.div 
                  className="absolute top-0 w-12 h-12 rounded-full border border-orange-500/50"
                  animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </div>

            {/* Connecting Path */}
            <div className="flex-1 h-[2px] bg-dark-700 relative mx-4 -mt-6">
              {/* Traveling Signal */}
              {signalActive && (
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-orange-500 to-purple-400 rounded-full shadow-[0_0_10px_#f97316]"
                  initial={{ left: "0%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              )}
            </div>

            {/* Destination Node */}
            <div className="relative flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border-2 border-orange-500 bg-orange-500/10 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <Send className="w-5 h-5 text-orange-500" />
              </div>
              <span className="font-mono text-[10px] text-orange-500 uppercase">LuqmanX_Core</span>
            </div>
          </div>

          {/* Status Console */}
          <div className="mt-8 bg-dark-950 rounded-lg p-4 font-mono text-xs text-neutral-400 border border-dark-800">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1 }}
              className="mb-1 text-purple-400"
            >
              &gt; Establishing handshake... [OK]
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1.5 }}
              className="mb-1 text-purple-400"
            >
              &gt; Encryption enabled... [OK]
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 2 }}
              className="mb-1"
            >
              &gt; Awaiting transmission...
            </motion.div>
            <div className="flex mt-2">
              <span className="text-orange-500 mr-2">root@luqmanx:~$</span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="w-2 h-3.5 bg-neutral-400 inline-block align-middle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
