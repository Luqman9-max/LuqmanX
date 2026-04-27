"use client"

import { useScroll, useTransform, MotionValue } from "framer-motion"

interface ScrollProgressOptions {
  inputRange?: [number, number]
  outputRange?: [number, number]
}

export function useScrollProgress(
  options: ScrollProgressOptions = {}
): { scrollY: MotionValue<number>; progress: MotionValue<number> } {
  const { inputRange = [0, 300], outputRange = [0, 1] } = options
  const { scrollY } = useScroll()
  const progress = useTransform(scrollY, inputRange, outputRange)

  return { scrollY, progress }
}
