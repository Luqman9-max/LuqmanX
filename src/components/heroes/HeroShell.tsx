"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface HeroShellProps {
  children: React.ReactNode
  className?: string
  minHeight?: "100svh" | "60vh" | "50vh"
}

export function HeroShell({ 
  children, 
  className,
  minHeight = "100svh"
}: HeroShellProps) {
  return (
    <section 
      className={cn(
        "relative flex items-center pb-20 overflow-visible",
        {
          "min-h-[100svh] -mt-20 pt-20": minHeight === "100svh", // Landing page
          "min-h-[70vh] -mt-20 pt-32": minHeight === "60vh",           // About page
          "min-h-[70vh] -mt-20 pt-32": minHeight === "50vh",           // Other pages
        },
        className
      )}
    >
      {children}
      
      {/* Bottom fade to smoothly transition to next section */}
      <div className="absolute -bottom-4 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-dark-950 z-[1] pointer-events-none" />
    </section>
  )
}
