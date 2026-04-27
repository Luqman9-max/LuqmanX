"use client"

import * as React from "react"
import { Container } from "@/components/layout/Container"
import { MotionReveal } from "@/components/effects/MotionReveal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { SectionDivider } from "@/components/effects/SectionDivider"
import { CountUp } from "@/components/effects/CountUp"
import { HeroGrid } from "@/components/effects/HeroGrid"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Code2, Database, Layout, Server, Sparkles, Terminal, ChevronRight } from "lucide-react"

// Hardcode colors to avoid Tailwind JIT issues with dynamic classes
const services = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    description: "I build responsive, accessible, and highly interactive user interfaces that look beautiful and perform exceptionally well across all devices.",
    icon: <Layout className="w-8 h-8" />,
    features: [
      "React & Next.js Development",
      "Framer Motion & GSAP Animations",
      "TailwindCSS Design Systems",
      "Performance & Core Web Vitals"
    ],
    colorAccent: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] group-hover:border-orange-500/50",
    iconBg: "bg-orange-500/20",
    style: "gradient",
    colSpan: "md:col-span-2"
  },
  {
    id: "backend",
    title: "Backend Systems",
    description: "Robust, secure, and scalable APIs and server architecture.",
    icon: <Server className="w-8 h-8" />,
    features: [
      "$ api.serve --port 3000",
      "$ db.migrate --force",
      "$ auth.generate_token",
      "$ cache.flush && restart"
    ],
    colorAccent: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] group-hover:border-purple-500/50",
    iconBg: "bg-purple-500/20",
    style: "terminal",
    colSpan: "md:col-span-1"
  },
  {
    id: "fullstack",
    title: "End-to-End Solutions",
    description: "Complete platform delivery from architecture to deployment.",
    icon: <Terminal className="w-8 h-8" />,
    features: [
      "Concept",
      "Design",
      "Build",
      "Deploy"
    ],
    colorAccent: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] group-hover:border-blue-500/50",
    iconBg: "bg-blue-500/20",
    style: "flow",
    colSpan: "md:col-span-2 md:col-start-2"
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description: "We define the technical requirements, outline the system architecture, and establish the technological stack best suited for the project goals."
  },
  {
    step: "02",
    title: "Prototyping & Design",
    description: "Creating wireframes, establishing the design system, and developing high-fidelity interactive prototypes for the user interface."
  },
  {
    step: "03",
    title: "Development & Engineering",
    description: "Writing clean, modular, and performant code. Building the frontend components, backend APIs, and database structures."
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description: "Rigorous QA testing, performance optimization, security audits, and finally deploying the application to production environments."
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden text-center">
        <HeroGrid />
        
        {/* Animated orbits */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-dark-800 rounded-full opacity-20 pointer-events-none"
          style={{ x: "-50%", y: "-50%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_#f97316] -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-dark-700 rounded-full opacity-40 pointer-events-none"
          style={{ x: "-50%", y: "-50%" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7] -translate-x-1/2 translate-y-1/2" />
        </motion.div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10 flex flex-col items-center">
          {/* Watermark Number */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-display font-bold text-dark-800/30 select-none pointer-events-none z-0 mix-blend-overlay">
            03
          </div>

          <MotionReveal variant="fadeDown" className="mb-6 flex flex-col items-center gap-4 relative z-10">
            <span className="font-mono text-neutral-500 tracking-widest uppercase text-xs">
              System.Root // Services
            </span>
            <span className="font-mono text-orange-500 tracking-widest uppercase text-sm">
              // System.Capabilities
            </span>
          </MotionReveal>
          
          <MotionReveal variant="clipRevealBottom" className="mb-8 max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              Technical <span className="relative inline-block group">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">Solutions</span>
                <span className="absolute bottom-1 md:bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 to-purple-500 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
              </span>
            </h1>
          </MotionReveal>
          
          <MotionReveal variant="fadeUp" delay={200} className="relative z-10">
            <p className="text-xl text-neutral-400 leading-relaxed font-mono max-w-2xl mx-auto">
              Comprehensive web engineering services, delivering high-performance applications from database to interface.
            </p>
          </MotionReveal>
        </Container>
      </section>

      <SectionDivider />

      {/* Services Detail - Bento Grid */}
      <section className="py-20 relative bg-dark-950">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {services.map((service, index) => (
              <MotionReveal 
                key={service.id} 
                variant="fadeUp" 
                delay={index * 100}
                className={service.colSpan}
              >
                <div className={`group relative bg-dark-900 border border-dark-800 rounded-3xl p-8 overflow-hidden h-full flex flex-col transition-all duration-500 ${service.glowColor}`}>
                  
                  {/* Style: Gradient Editor */}
                  {service.style === "gradient" && (
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-orange-900/20 to-transparent hidden lg:flex items-center justify-end pr-8">
                      <div className="w-64 h-64 bg-dark-950 border border-dark-700 rounded-xl shadow-2xl p-4 overflow-hidden transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <div className="flex gap-2 mb-4">
                          <div className="w-3 h-3 rounded-full bg-red-500/50" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                          <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="space-y-3 font-mono text-sm">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }} className="h-4 bg-orange-500/20 rounded truncate text-orange-500 px-2 overflow-hidden">export function Build()</motion.div>
                          <motion.div initial={{ width: 0 }} whileInView={{ width: "80%" }} transition={{ duration: 1, delay: 0.2 }} className="h-4 bg-purple-500/20 rounded truncate text-purple-500 px-2 ml-4 overflow-hidden">return {"<Awesome />"}</motion.div>
                          <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} transition={{ duration: 1, delay: 0.4 }} className="h-4 bg-blue-500/20 rounded truncate text-blue-500 px-2 ml-4 overflow-hidden">{"// Fast & scalable"}</motion.div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Style: Flow Diagram */}
                  {service.style === "flow" && (
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-end pr-12 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-2 text-dark-500 group-hover:text-blue-500 transition-colors">
                        <div className="px-4 py-2 border border-current rounded font-mono text-xs">Concept</div>
                        <ArrowRight className="w-4 h-4" />
                        <div className="px-4 py-2 border border-current rounded font-mono text-xs">Build</div>
                        <ArrowRight className="w-4 h-4" />
                        <div className="px-4 py-2 border border-current rounded font-mono text-xs bg-current text-dark-900 font-bold">Deploy</div>
                      </div>
                    </div>
                  )}
                  
                  <div className="relative z-10 lg:w-2/3 flex flex-col h-full">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-colors ${service.colorAccent} ${service.iconBg}`}>
                      {service.icon}
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-neutral-400 leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>

                    <div className="mt-auto">
                      <ul className={`flex flex-col gap-3 mb-8 ${service.style === 'terminal' ? 'bg-dark-950 p-4 rounded-xl border border-dark-800 font-mono text-sm' : ''}`}>
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            {service.style === 'terminal' ? (
                              <ChevronRight className="w-4 h-4 text-purple-500 shrink-0" />
                            ) : (
                              <CheckCircle2 className={`w-5 h-5 shrink-0 ${service.colorAccent.split(' ')[1]}`} />
                            )}
                            <span className={service.style === 'terminal' ? 'text-neutral-400' : 'text-neutral-300'}>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button variant="outline" className="group/btn border-dark-700 hover:border-white w-fit" asChild>
                        <Link href="/contact" className="flex items-center gap-2 text-neutral-300">
                          Request Service <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}

            {/* Stats Mini Card */}
            <MotionReveal variant="fadeUp" delay={300} className="md:col-span-1 md:row-start-2">
              <div className="group bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-3xl p-8 h-full flex flex-col justify-center relative overflow-hidden hover:border-dark-500 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
                <div className="relative z-10 space-y-8">
                  <div>
                    <div className="text-5xl font-display font-bold text-white mb-2 flex items-baseline">
                      <CountUp to={99} />
                      <span className="text-3xl text-orange-500 ml-1">.9%</span>
                    </div>
                    <div className="text-sm font-mono text-neutral-400 tracking-wider uppercase">Uptime Target</div>
                  </div>
                  <div className="w-full h-px bg-dark-700" />
                  <div>
                    <div className="text-5xl font-display font-bold text-white mb-2 flex items-baseline">
                      <CountUp to={15} />
                      <span className="text-3xl text-purple-500 ml-1">+</span>
                    </div>
                    <div className="text-sm font-mono text-neutral-400 tracking-wider uppercase">Systems Built</div>
                  </div>
                </div>
              </div>
            </MotionReveal>
            
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* Process Section */}
      <section className="section-padding relative">
        <Container>
          <SectionHeader
            count="04"
            label="System.Process"
            title="Execution Pipeline"
            description="A structured, transparent methodology ensuring projects are delivered on time, within scope, and to the highest technical standards."
            align="center"
          />

          <div className="mt-20 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-dark-800 z-0">
              <div className="h-full bg-gradient-to-r from-orange-500 to-purple-500 origin-left w-full opacity-50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {process.map((step, index) => (
                <MotionReveal key={step.step} variant="fadeUp" delay={index * 200}>
                  <div className="flex flex-col items-center text-center lg:items-start lg:text-left relative group">
                    {/* Step Number Bubble */}
                    <div className="w-16 h-16 rounded-full bg-dark-950 border-2 border-dark-700 flex items-center justify-center text-xl font-display font-bold text-neutral-400 mb-8 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10">
                      {step.step}
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-500 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-dark-950/0 to-dark-950/0 mix-blend-screen pointer-events-none" />
        
        <Container className="relative z-10 text-center">
          <MotionReveal variant="scaleIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 font-mono text-sm mb-8 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Limited availability for Q3
            </div>
          </MotionReveal>

          <MotionReveal variant="clipRevealBottom">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">upgrade?</span>
            </h2>
          </MotionReveal>
          
          <MotionReveal variant="fadeUp" delay={200}>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
              Transform your digital presence with a premium, high-performance web application.
            </p>
          </MotionReveal>
          
          <MotionReveal variant="fadeUp" delay={400}>
            <Button variant="gradient" size="lg" className="h-16 px-12 text-xl" magnetic asChild>
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </MotionReveal>
        </Container>
      </section>
    </>
  )
}
