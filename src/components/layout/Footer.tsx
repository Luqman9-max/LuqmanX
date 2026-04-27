"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/ui/GradientText"
import { MotionReveal } from "@/components/effects/MotionReveal"
import { ArrowRight, Code2, Terminal } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer ref={ref} className="bg-dark-950 pt-24 pb-12 mt-auto relative overflow-hidden">
      {/* Animated Top Border */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
      />
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-white blur-[2px]"
        animate={{ x: ["-500%", "500%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] pointer-events-none" />
      
      <Container className="relative z-10">
        {/* Command Center Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Big Brand Statement */}
          <div className="lg:w-2/3">
            <MotionReveal variant="clipRevealBottom">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Let's build the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">future together.</span>
              </h2>
            </MotionReveal>
            <MotionReveal variant="fadeUp" delay={200}>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-xl font-mono text-neutral-400 hover:text-white transition-colors group mt-4 border-b border-neutral-700 hover:border-orange-500 pb-1"
              >
                <Terminal className="w-5 h-5 text-orange-500" />
                <span>Initialize project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-orange-500" />
              </Link>
            </MotionReveal>
          </div>

          {/* Links & Socials (2 Columns) */}
          <div className="w-full lg:w-1/3 grid grid-cols-2 gap-8">
            <MotionReveal stagger delay={300}>
              <h3 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-6">Directory</h3>
              <ul className="flex flex-col gap-4">
                {['Home', 'About', 'Portfolio', 'Services'].map((item) => (
                  <MotionReveal key={item} variant="fadeLeft">
                    <li>
                      <Link 
                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                        className="text-neutral-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                      >
                        {item}
                      </Link>
                    </li>
                  </MotionReveal>
                ))}
              </ul>
            </MotionReveal>

            <MotionReveal stagger delay={400}>
              <h3 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-6">Network</h3>
              <ul className="flex flex-col gap-4">
                <MotionReveal variant="fadeLeft">
                  <li>
                    <a href="mailto:luqman@example.com" className="text-neutral-400 hover:text-orange-500 hover:translate-x-1 inline-block transition-all">
                      Email
                    </a>
                  </li>
                </MotionReveal>
                <MotionReveal variant="fadeLeft">
                  <li>
                    <a href="https://wa.me/62895422783493" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-purple-500 hover:translate-x-1 inline-block transition-all">
                      WhatsApp
                    </a>
                  </li>
                </MotionReveal>
                <MotionReveal variant="fadeLeft">
                  <li>
                    <a href="#" className="text-neutral-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                      LinkedIn
                    </a>
                  </li>
                </MotionReveal>
                <MotionReveal variant="fadeLeft">
                  <li>
                    <a href="#" className="text-neutral-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                      GitHub
                    </a>
                  </li>
                </MotionReveal>
              </ul>
            </MotionReveal>
          </div>
        </div>

        {/* Bottom Bar */}
        <MotionReveal 
          variant="fadeUp" 
          delay={600}
          className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-display font-bold tracking-tight inline-block group">
              <span className="group-hover:text-orange-500 transition-colors">Luqman</span>
              <GradientText>X</GradientText>
            </Link>
            <span className="text-neutral-600 hidden md:inline-block">/</span>
            <p className="text-neutral-500 text-sm hidden md:inline-block">
              Information Systems Student & Web Developer
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-neutral-500 text-sm">
              © {currentYear} LuqmanX. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-neutral-500 font-mono group bg-dark-900 px-3 py-1.5 rounded-md border border-dark-800 hover:border-orange-500/50 transition-colors">
              <Code2 className="w-4 h-4 text-orange-500 group-hover:rotate-12 transition-transform" />
              <span>Built with</span>
              <span className="text-orange-500 group-hover:text-purple-500 transition-colors inline-block relative overflow-hidden">
                <motion.span 
                  className="inline-block"
                  initial={{ y: 0 }}
                  whileHover={{ y: "-100%" }}
                  transition={{ duration: 0.2 }}
                >
                  Precision
                </motion.span>
                <motion.span 
                  className="absolute left-0 top-full"
                  initial={{ y: 0 }}
                  whileHover={{ y: "-100%" }}
                  transition={{ duration: 0.2 }}
                >
                  Precision
                </motion.span>
              </span>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </footer>
  )
}
