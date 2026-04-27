export const TIMING = {
  fast: 0.2,       // hover states, micro-interactions
  normal: 0.4,     // element entrances
  slow: 0.8,       // hero elements, major reveals
  stagger: 0.1,   // delay between staggered children
} as const

export const EASING = {
  smooth: [0.25, 0.1, 0.25, 1],       // general movement
  snappy: [0.76, 0, 0.24, 1],         // quick snaps
  dramatic: [0.22, 1, 0.36, 1],       // slow-in fast-out dramatic
  spring: { type: "spring", stiffness: 100, damping: 15 },
  bounce: { type: "spring", stiffness: 300, damping: 20 },
  exit: [0.4, 0, 1, 1],               // exits feel snappy
} as const

export const VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: TIMING.normal, ease: EASING.smooth } },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: TIMING.normal, ease: EASING.smooth } },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: TIMING.normal, ease: EASING.smooth } },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: TIMING.normal, ease: EASING.smooth } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: TIMING.normal, ease: EASING.snappy } },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: TIMING.normal, ease: EASING.smooth } },
  },
  clipReveal: {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: { clipPath: "inset(0 0 0 0)", transition: { duration: TIMING.slow, ease: EASING.dramatic } },
  },
  clipRevealBottom: {
    hidden: { clipPath: "inset(100% 0 0 0)", y: 20 },
    visible: { clipPath: "inset(0 0 0 0)", y: 0, transition: { duration: TIMING.slow, ease: EASING.dramatic } },
  },
  staggerContainer: {
    hidden: {},
    visible: { transition: { staggerChildren: TIMING.stagger } },
  },
} as const
