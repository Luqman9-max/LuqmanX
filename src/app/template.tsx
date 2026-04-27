"use client"

import { motion } from "framer-motion"
import { EASING, TIMING } from "@/lib/animations"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: TIMING.normal, ease: EASING.smooth }}
      className="flex flex-col flex-1"
    >
      {children}
    </motion.div>
  )
}
