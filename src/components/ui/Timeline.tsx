"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MotionReveal } from "../effects/MotionReveal"
import { Card } from "./Card"

interface TimelineItem {
  year: string
  title: string
  description: string
}

const timelineData: TimelineItem[] = [
  {
    year: "2021",
    title: "Started The Journey",
    description: "Discovered the world of web development. Began learning HTML, CSS, and basic JavaScript while tinkering with simple static sites."
  },
  {
    year: "2022",
    title: "University & Fundamentals",
    description: "Enrolled in Information Systems. Deepened understanding of algorithms, databases, and system architecture. Started building dynamic PHP apps."
  },
  {
    year: "2023",
    title: "Frameworks & Backend",
    description: "Mastered Laravel for robust backend systems. Started taking on small freelance projects to apply classroom theory to real-world problems."
  },
  {
    year: "2024",
    title: "Modern Frontend",
    description: "Transitioned to React, Next.js, and Tailwind CSS. Focus shifted towards building premium, interactive, and highly performant user interfaces."
  }
]

export function Timeline() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  })

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto py-10">
      {/* Central Line Background */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-dark-800 -translate-x-1/2" />
      
      {/* Animated Line Progress */}
      <motion.div 
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 to-purple-500 -translate-x-1/2 origin-top"
        style={{ scaleY: scrollYProgress }}
      />

      <div className="flex flex-col gap-12 md:gap-24">
        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0
          
          return (
            <div key={item.year} className="relative flex items-center md:justify-between flex-col md:flex-row">
              {/* Timeline Node */}
              <motion.div 
                className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-dark-900 border-2 border-orange-500 -translate-x-1/2 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-orange-500/20 blur-sm rounded-full scale-150 animate-pulse" />
              </motion.div>

              {/* Content (Left or Right) */}
              <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right md:order-1' : 'md:pl-12 md:order-2'}`}>
                <MotionReveal variant={isEven ? "fadeRight" : "fadeLeft"}>
                  <Card hoverable className="p-6 relative group overflow-visible">
                    {/* Connecting line to node (desktop only) */}
                    <div className={`hidden md:block absolute top-1/2 w-8 h-px bg-dark-700 group-hover:bg-orange-500 transition-colors ${isEven ? '-right-8' : '-left-8'}`} />
                    
                    <span className="font-mono text-orange-500 font-bold mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                  </Card>
                </MotionReveal>
              </div>
              
              {/* Empty space for the other side */}
              <div className={`hidden md:block w-5/12 ${isEven ? 'order-2' : 'order-1'}`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
