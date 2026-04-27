"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card } from "./Card"
import { MotionReveal } from "../effects/MotionReveal"

interface Skill {
  name: string
  category: "Frontend" | "Backend" | "Tools" | "Design"
  level: string
}

const skills: Skill[] = [
  { name: "React", category: "Frontend", level: "Advanced" },
  { name: "Next.js", category: "Frontend", level: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
  { name: "TypeScript", category: "Frontend", level: "Intermediate" },
  { name: "Framer Motion", category: "Frontend", level: "Intermediate" },
  { name: "Laravel", category: "Backend", level: "Advanced" },
  { name: "PHP", category: "Backend", level: "Advanced" },
  { name: "Node.js", category: "Backend", level: "Familiar" },
  { name: "MySQL", category: "Backend", level: "Intermediate" },
  { name: "Git", category: "Tools", level: "Advanced" },
  { name: "VS Code", category: "Tools", level: "Advanced" },
  { name: "Figma", category: "Design", level: "Intermediate" },
]

export function SkillGrid() {
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill, i) => (
        <MotionReveal key={skill.name} variant="scaleIn" delay={i * 50}>
          <Card 
            hoverable 
            className="p-6 flex flex-col items-center justify-center text-center cursor-default h-full relative"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <motion.div
              animate={{ 
                y: hoveredSkill === skill.name ? -5 : 0,
                color: hoveredSkill === skill.name ? (skill.category === "Frontend" ? "#F97316" : skill.category === "Backend" ? "#A855F7" : "#fff") : "#9CA3AF"
              }}
              className="text-neutral-400 font-display font-bold text-lg mb-1 transition-colors"
            >
              {skill.name}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: hoveredSkill === skill.name ? 1 : 0.5,
                height: "auto"
              }}
              className="text-xs font-mono text-neutral-500 uppercase tracking-wider"
            >
              {skill.category}
            </motion.div>
            
            {/* Absolute positioned level indicator that shows on hover */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: hoveredSkill === skill.name ? 1 : 0,
                y: hoveredSkill === skill.name ? 0 : 10
              }}
              className="absolute bottom-2 left-0 right-0 text-[10px] text-orange-500 font-mono text-center"
            >
              {skill.level}
            </motion.div>
          </Card>
        </MotionReveal>
      ))}
    </div>
  )
}
