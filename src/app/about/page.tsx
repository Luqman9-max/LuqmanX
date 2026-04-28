"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/layout/Container"
import { MotionReveal } from "@/components/effects/MotionReveal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Timeline } from "@/components/ui/Timeline"
import { CodeBlock } from "@/components/effects/CodeBlock"
import { SectionDivider } from "@/components/effects/SectionDivider"
import { CountUp } from "@/components/effects/CountUp"
import { HeroShell } from "@/components/heroes/HeroShell"
import { HeroAtmosphere } from "@/components/heroes/HeroAtmosphere"
import { AboutPortraitFrame } from "@/components/heroes/AboutPortraitFrame"
import Link from "next/link"
import { Code2, Database, Layout, Sparkles, Terminal, ArrowRight, Server, Wrench, FileCode2, Cpu, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroShell minHeight="60vh">
        {/* Background elements */}
        <HeroAtmosphere variant="streams" />
        
        {/* Vertical Tech Flow (DNA Helix style) */}
        <div className="absolute right-[5%] top-0 bottom-0 w-32 opacity-20 pointer-events-none hidden lg:flex flex-col justify-center gap-12 mask-fade-edges z-0">
          {[Code2, Terminal, Database, Server, Cpu, Globe, FileCode2, Layout].map((Icon, i) => (
            <motion.div
              key={i}
              className="flex justify-center"
              animate={{
                x: [Math.sin(i) * 30, Math.sin(i + Math.PI) * 30, Math.sin(i) * 30],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <Icon className={`w-8 h-8 ${i % 2 === 0 ? 'text-orange-500' : 'text-purple-500'}`} />
            </motion.div>
          ))}
        </div>

        <Container className="relative z-10 w-full">
          {/* Watermark Number */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] md:text-[20rem] font-display font-bold text-dark-800/30 select-none pointer-events-none z-0 mix-blend-overlay">
            02
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Left Column: Visual */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <AboutPortraitFrame />
            </div>

            {/* Right Column: Text */}
            <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
              <MotionReveal variant="fadeDown" className="mb-6 flex flex-col items-start gap-4">
                <span className="font-mono text-neutral-500 tracking-widest uppercase text-xs">
                  System.Root // About
                </span>
                <span className="font-mono text-orange-500 tracking-widest uppercase text-sm">
                  // System.Profile
                </span>
              </MotionReveal>
              
              <MotionReveal variant="wordReveal" className="mb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight tracking-tight">
                  Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">Logic.</span> <br />
                  Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">Impact.</span>
                </h1>
              </MotionReveal>
              
              <MotionReveal variant="fadeUp" delay={400} className="max-w-2xl">
                <p className="text-xl text-neutral-400 leading-relaxed font-mono">
                  Information Systems student translating complex business requirements into elegant, high-performance digital solutions.
                </p>
              </MotionReveal>
            </div>
          </div>
        </Container>
      </HeroShell>

      <SectionDivider />

      {/* Philosophy Section (System Diagram) */}
      <section className="section-padding relative bg-dark-900/30">
        <Container>
          <SectionHeader
            count="01"
            label="System.Core"
            title="Development Philosophy"
            description="My approach to building software combines academic rigor with pragmatic problem-solving."
          />

          <div className="mt-16 relative">
            {/* Connecting lines for desktop with animated path */}
            <svg className="hidden md:block absolute top-1/2 left-[10%] right-[10%] w-[80%] h-24 -translate-y-1/2 z-0 overflow-visible" preserveAspectRatio="none">
              <motion.path
                d="M 0,48 C 30%,48 30%,12 50%,12 C 70%,12 70%,48 100%,48"
                fill="none"
                stroke="rgba(249, 115, 22, 0.3)"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M 0,48 C 30%,48 30%,84 50%,84 C 70%,84 70%,48 100%,48"
                fill="none"
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />
            </svg>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              <MotionReveal variant="fadeUp" delay={100}>
                <div className="group h-full bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 relative">
                  {/* Top Gradient Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-orange-400" />
                  
                  <div className="p-8 h-full flex flex-col">
                    {/* Step Number */}
                    <div className="text-5xl font-display font-bold text-dark-800 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-orange-500 group-hover:to-orange-900 transition-colors">
                      01
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-dark-950 border border-dark-800 flex items-center justify-center text-orange-500 mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-700" />
                      <Terminal className="w-8 h-8 relative z-10" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">Scalable Architecture</h3>
                    <p className="text-neutral-400 leading-relaxed mb-8 flex-grow">
                      Code should be written not just for today's requirements, but engineered to adapt to tomorrow's growth. I focus on modular, maintainable system design.
                    </p>
                    
                    {/* Bottom Tag */}
                    <div className="mt-auto pt-6 border-t border-dark-800 font-mono text-xs text-orange-500/80">
                      {`{ modular: true }`}
                    </div>
                  </div>
                </div>
              </MotionReveal>

              <MotionReveal variant="fadeUp" delay={200}>
                <div className="group h-full bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 relative mt-0 md:mt-12">
                  {/* Top Gradient Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400" />
                  
                  <div className="p-8 h-full flex flex-col">
                    {/* Step Number */}
                    <div className="text-5xl font-display font-bold text-dark-800 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-purple-500 group-hover:to-purple-900 transition-colors">
                      02
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-dark-950 border border-dark-800 flex items-center justify-center text-purple-500 mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-700" />
                      <Layout className="w-8 h-8 relative z-10" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">Pixel Perfection</h3>
                    <p className="text-neutral-400 leading-relaxed mb-8 flex-grow">
                      Great engineering deserves great design. I ensure that every interface is meticulously crafted, responsive, and accessible across all devices.
                    </p>
                    
                    {/* Bottom Tag */}
                    <div className="mt-auto pt-6 border-t border-dark-800 font-mono text-xs text-purple-500/80">
                      {`{ responsive: true }`}
                    </div>
                  </div>
                </div>
              </MotionReveal>

              <MotionReveal variant="fadeUp" delay={300}>
                <div className="group h-full bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 relative">
                  {/* Top Gradient Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
                  
                  <div className="p-8 h-full flex flex-col">
                    {/* Step Number */}
                    <div className="text-5xl font-display font-bold text-dark-800 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-blue-500 group-hover:to-blue-900 transition-colors">
                      03
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-dark-950 border border-dark-800 flex items-center justify-center text-blue-500 mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-700" />
                      <Sparkles className="w-8 h-8 relative z-10" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">Kinetic Interaction</h3>
                    <p className="text-neutral-400 leading-relaxed mb-8 flex-grow">
                      Static pages are boring. I utilize motion and micro-interactions strategically to guide user attention and provide meaningful feedback.
                    </p>
                    
                    {/* Bottom Tag */}
                    <div className="mt-auto pt-6 border-t border-dark-800 font-mono text-xs text-blue-500/80">
                      {`{ motion: true }`}
                    </div>
                  </div>
                </div>
              </MotionReveal>
            </div>
            
            {/* Pull Quote */}
            <MotionReveal variant="scaleIn" delay={400} className="mt-20">
              <div className="relative max-w-4xl mx-auto text-center px-8 py-12 border-y border-dark-800 bg-dark-900/50">
                <div className="absolute top-0 left-4 text-6xl text-orange-500/20 font-serif leading-none">"</div>
                <p className="text-2xl md:text-3xl font-display font-medium text-neutral-300 italic">
                  Good design makes a product understandable. Great engineering makes it immortal.
                </p>
                <div className="absolute bottom-0 right-4 text-6xl text-purple-500/20 font-serif leading-none">"</div>
              </div>
            </MotionReveal>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* Skills Section */}
      <section className="section-padding relative">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeader
              count="02"
              label="System.Stack"
              title="Technical Proficiency"
              description="A categorized breakdown of my current technology stack and tools."
              className="mb-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <MotionReveal variant="fadeUp" delay={100}>
              <Card variant="default" className="h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Layout className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">Frontend</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { name: "React / Next.js", level: 90 },
                    { name: "Tailwind CSS", level: 95 },
                    { name: "TypeScript", level: 80 },
                    { name: "Framer Motion", level: 75 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-neutral-300">{skill.name}</span>
                        <span className="text-orange-500 font-mono"><CountUp to={skill.level} suffix="%" /></span>
                      </div>
                      <div className="h-1.5 w-full bg-dark-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-orange-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </MotionReveal>

            {/* Backend */}
            <MotionReveal variant="fadeUp" delay={200}>
              <Card variant="default" className="h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">Backend</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { name: "Laravel / PHP", level: 90 },
                    { name: "Node.js", level: 70 },
                    { name: "MySQL", level: 85 },
                    { name: "PostgreSQL", level: 75 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-neutral-300">{skill.name}</span>
                        <span className="text-purple-500 font-mono"><CountUp to={skill.level} suffix="%" /></span>
                      </div>
                      <div className="h-1.5 w-full bg-dark-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </MotionReveal>

            {/* Tools */}
            <MotionReveal variant="fadeUp" delay={300}>
              <Card variant="default" className="h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">Tools & Env</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { name: "Git & GitHub", level: 85 },
                    { name: "Docker", level: 60 },
                    { name: "Figma", level: 80 },
                    { name: "Linux/Unix", level: 75 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-neutral-300">{skill.name}</span>
                        <span className="text-blue-500 font-mono"><CountUp to={skill.level} suffix="%" /></span>
                      </div>
                      <div className="h-1.5 w-full bg-dark-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </MotionReveal>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* Timeline Section */}
      <section className="section-padding relative">
        <Container>
          <SectionHeader
            count="03"
            label="System.History"
            title="Execution Timeline"
            align="center"
          />
          <Timeline />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-dark-950/0 to-dark-950/0 mix-blend-screen pointer-events-none" />
        
        <Container className="relative z-10 text-center">
          <MotionReveal variant="scaleIn">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">together.</span>
            </h2>
          </MotionReveal>
          
          <MotionReveal variant="fadeUp" delay={200}>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
              Interested in collaborating or have a project in mind? My inbox is always open.
            </p>
          </MotionReveal>
          
          <MotionReveal variant="fadeUp" delay={400}>
            <Button variant="gradient" size="lg" className="h-16 px-12 text-xl" magnetic asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </MotionReveal>
        </Container>
      </section>
    </>
  )
}
