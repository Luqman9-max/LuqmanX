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
        "relative flex items-center pt-32 pb-20 overflow-hidden",
        {
          "min-h-[100svh] pt-20": minHeight === "100svh", // Landing page
          "min-h-[60vh]": minHeight === "60vh",           // About page
          "min-h-[50vh]": minHeight === "50vh",           // Other pages
        },
        className
      )}
    >
      {children}
      
      {/* Bottom fade to smoothly transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-dark-950 z-[1] pointer-events-none" />
    </section>
  )
}
