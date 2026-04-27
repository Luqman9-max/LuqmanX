"use client"

import * as React from "react"

interface AnimatedCounterProps {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({
  target,
  duration = 2000,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(false)
  const domRef = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    const currentRef = domRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          if (currentRef) observer.unobserve(currentRef)
        }
      },
      { threshold: 0.1 }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  React.useEffect(() => {
    if (!isVisible) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      
      // Easing function: easeOutQuart
      const easeOut = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOut * target))
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }
    
    window.requestAnimationFrame(step)
  }, [isVisible, target, duration])

  return (
    <span ref={domRef} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  )
}
