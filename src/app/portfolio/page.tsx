"use client"

import * as React from "react"
import { Container } from "@/components/layout/Container"
import { MotionReveal } from "@/components/effects/MotionReveal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { SectionDivider } from "@/components/effects/SectionDivider"
import { HeroGrid } from "@/components/effects/HeroGrid"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ExternalLink, GitBranch, Layout, Image as ImageIcon } from "lucide-react"

// Mock projects data
const projects = [
  {
    id: 1,
    title: "Edge Mind Platform",
    description: "A high-performance brutalist web platform featuring scroll-driven animations, GSAP orchestrations, and a custom lead generation system. Built to deliver a cinematic, confrontational user experience that drives high-quality conversions for a specialized consulting firm.",
    image: "edgemind-mockup.png", // Will use placeholder if missing
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    link: "#",
    github: "#",
    color: "from-orange-500/20 to-orange-900/20",
    accent: "text-orange-500",
    border: "border-orange-500/30"
  },
  {
    id: 2,
    title: "Jarreva E-Commerce",
    description: "A full-stack e-commerce solution featuring real-time inventory management, secure payment gateway integration, and an intuitive administrative dashboard. The architecture prioritizes performance and scalability to handle high traffic volumes during promotional events.",
    image: "jarreva-mockup.png",
    tech: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    link: "#",
    github: "#",
    color: "from-purple-500/20 to-purple-900/20",
    accent: "text-purple-500",
    border: "border-purple-500/30"
  },
  {
    id: 3,
    title: "NexGen Analytics",
    description: "A comprehensive data visualization dashboard that aggregates metrics from multiple APIs into a single, cohesive interface. Features customizable widgets, real-time data streaming via WebSockets, and complex chart implementations using D3.js.",
    image: "nexgen-mockup.png",
    tech: ["TypeScript", "Next.js", "D3.js", "Node.js"],
    link: "#",
    github: "#",
    color: "from-blue-500/20 to-blue-900/20",
    accent: "text-blue-500",
    border: "border-blue-500/30"
  }
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden">
        <HeroGrid />
        
        {/* Dynamic Filmstrip Mosaic */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <motion.div 
            className="absolute top-[15%] left-[5%] w-72 h-44 bg-dark-900 border border-dark-700 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center backdrop-blur-sm"
            animate={{ y: [-10, 10, -10], rotate: [-10, -8, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ImageIcon className="w-12 h-12 text-dark-700" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent mix-blend-overlay" />
          </motion.div>
          
          <motion.div 
            className="absolute top-[35%] right-[5%] w-80 h-52 bg-dark-900 border border-dark-700 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center backdrop-blur-sm"
            animate={{ y: [15, -15, 15], rotate: [5, 8, 5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <ImageIcon className="w-16 h-16 text-dark-700" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent mix-blend-overlay" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-[5%] left-[25%] w-64 h-40 bg-dark-900 border border-dark-700 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center backdrop-blur-sm hidden md:flex"
            animate={{ y: [-15, 15, -15], rotate: [-5, -2, -5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <ImageIcon className="w-10 h-10 text-dark-700" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent mix-blend-overlay" />
          </motion.div>
        </div>

        <Container className="relative z-10">
          {/* Watermark Number */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] md:text-[20rem] font-display font-bold text-dark-800/30 select-none pointer-events-none z-0 mix-blend-overlay">
            04
          </div>

          <div className="max-w-3xl relative z-10">
            <MotionReveal variant="fadeDown" className="mb-6 flex flex-col items-start gap-4">
              <span className="font-mono text-neutral-500 tracking-widest uppercase text-xs">
                System.Root // Portfolio
              </span>
              <div className="flex items-center gap-4">
                <span className="font-mono text-purple-500 tracking-widest uppercase text-sm">
                  // System.Archive
                </span>
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-mono font-bold border border-purple-500/30">
                  {projects.length} PROJECTS
                </span>
              </div>
            </MotionReveal>
            
            <MotionReveal variant="clipRevealBottom" className="mb-8">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                Featured <br />
                <span className="relative inline-block group">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">Deployments</span>
                  <span className="absolute bottom-1 md:bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-orange-500 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
                </span>
              </h1>
            </MotionReveal>
            
            <MotionReveal variant="fadeUp" delay={200}>
              <p className="text-xl text-neutral-400 leading-relaxed font-mono max-w-2xl">
                A curated selection of technical projects, demonstrating architecture, design, and complex problem solving.
              </p>
            </MotionReveal>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* Projects Feed */}
      <section className="py-20 relative bg-dark-950">
        <Container>
          <div className="flex flex-col gap-32">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0
              
              return (
                <div key={project.id} className="relative group">
                  {/* Decorative Number */}
                  <div className="absolute -top-20 -left-10 text-[15rem] font-display font-bold text-dark-800/30 select-none pointer-events-none z-0 hidden md:block group-hover:text-dark-800/50 transition-colors duration-500">
                    0{index + 1}
                  </div>

                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center relative z-10`}>
                    
                    {/* Image Column */}
                    <div className="w-full lg:w-3/5">
                      <MotionReveal variant={isEven ? "fadeRight" : "fadeLeft"}>
                        <Card variant="project" tilt hoverable className={`w-full aspect-[4/3] p-0 overflow-hidden border-dark-700 ${project.border}`}>
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay z-10" />
                          
                          {/* Main Image Container */}
                          <div className="absolute inset-4 lg:inset-8 bg-dark-950 rounded-lg shadow-2xl overflow-hidden border border-dark-700 flex flex-col group-hover:scale-105 transition-transform duration-700">
                            {/* Browser/Window Header */}
                            <div className="w-full h-8 bg-dark-900 border-b border-dark-800 flex items-center px-4 gap-2 z-20">
                               <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                               <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                               <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                               <div className="ml-auto text-[10px] font-mono text-neutral-600">{project.title.toLowerCase().replace(/ /g, '-')}.exe</div>
                            </div>
                            
                            {/* Actual Image / Placeholder */}
                            <div className="flex-1 relative bg-dark-800 flex items-center justify-center">
                              {/* Assuming images might not exist yet, using an icon placeholder */}
                              <Layout className={`w-24 h-24 ${project.accent} opacity-20`} />
                            </div>
                            
                            {/* Glass overlay on hover */}
                            <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-30">
                              <Button variant="outline" size="icon" className="rounded-full bg-dark-900" asChild>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-5 h-5 text-white" />
                                </a>
                              </Button>
                              <Button variant="outline" size="icon" className="rounded-full bg-dark-900" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <GitBranch className="w-5 h-5 text-white" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </MotionReveal>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-2/5 flex flex-col">
                      <MotionReveal variant="fadeUp" delay={100} className="mb-6">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, i) => (
                            <MotionReveal key={tech} variant="scaleIn" delay={200 + (i * 50)}>
                              <span className="px-3 py-1.5 text-xs font-mono font-medium text-neutral-300 bg-dark-800 border border-dark-700 rounded-md">
                                {tech}
                              </span>
                            </MotionReveal>
                          ))}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                          {project.title}
                        </h2>
                        <p className="text-neutral-400 leading-relaxed text-lg mb-8">
                          {project.description}
                        </p>
                      </MotionReveal>
                      
                      <MotionReveal variant="fadeUp" delay={200} className="mt-auto">
                        <div className="flex items-center gap-4 pt-6 border-t border-dark-800">
                          <Button variant="outline" className="group" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              Live Project 
                              <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          </Button>
                          <Button variant="ghost" className="group" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              Source Code
                              <GitBranch className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                      </MotionReveal>
                    </div>
                    
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-dark-950/0 to-dark-950/0 mix-blend-screen pointer-events-none" />
        
        <Container className="relative z-10 text-center">
          <MotionReveal variant="scaleIn">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Want to see <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">more?</span>
            </h2>
          </MotionReveal>
          
          <MotionReveal variant="fadeUp" delay={200}>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
              Check out my GitHub for more open-source projects, experiments, and code snippets.
            </p>
          </MotionReveal>
          
          <MotionReveal variant="fadeUp" delay={400}>
            <Button variant="gradient" size="lg" className="h-16 px-12 text-xl" magnetic asChild>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <GitBranch className="w-5 h-5" /> Visit GitHub Profile
              </a>
            </Button>
          </MotionReveal>
        </Container>
      </section>
    </>
  )
}
