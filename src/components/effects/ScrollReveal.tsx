"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const domRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const currentRef = domRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (currentRef) observer.unobserve(currentRef)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div
      ref={domRef}
      className={cn(
        "transition-all duration-700 ease-out",
        !isVisible && {
          "opacity-0 translate-y-10": direction === "up",
          "opacity-0 -translate-y-10": direction === "down",
          "opacity-0 -translate-x-10": direction === "left",
          "opacity-0 translate-x-10": direction === "right",
          "opacity-0 scale-95": direction === "none",
        },
        isVisible && "opacity-100 translate-y-0 translate-x-0 scale-100",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}
