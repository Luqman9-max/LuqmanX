"use client"

import * as React from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

interface CountUpProps {
  to: number
  from?: number
  duration?: number
  className?: string
  suffix?: string
}

export function CountUp({ to, from = 0, duration = 2, className, suffix = "" }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const spring = useSpring(from, {
    duration: duration * 1000,
    bounce: 0,
  })

  const display = useTransform(spring, (current) => Math.round(current) + suffix)

  React.useEffect(() => {
    if (isInView) {
      spring.set(to)
    }
  }, [isInView, spring, to])

  return <motion.span ref={ref} className={className}>{display}</motion.span>
}
