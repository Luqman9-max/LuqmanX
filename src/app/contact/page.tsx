"use client"

import * as React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Container } from "@/components/layout/Container"
import { MotionReveal } from "@/components/effects/MotionReveal"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { SectionDivider } from "@/components/effects/SectionDivider"
import { HeroGrid } from "@/components/effects/HeroGrid"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Send, MessageSquare, CheckCircle2, Loader2, Code2, Terminal, ArrowRight, Activity, Clock, Globe } from "lucide-react"

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xpwavzyz")
  const [focusedField, setFocusedField] = React.useState<string | null>(null)
  const [activeTab, setActiveTab] = React.useState<"email" | "whatsapp" | "location">("email")
  
  // Progress bar calculation
  const [formData, setFormData] = React.useState({ name: "", email: "", subject: "", message: "" })
  const progress = Object.values(formData).filter(v => v.length > 0).length * 25

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Live time
  const [time, setTime] = React.useState("")
  React.useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Jakarta' }) + " WIB")
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden text-center">
        <HeroGrid />
        
        {/* Network Topology Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="rgba(249,115,22,0.5)" />
                <path d="M50 50 L150 150 M50 50 L-50 150 M50 50 L150 -50 M50 50 L-50 -50" stroke="rgba(249,115,22,0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#network)" />
          </svg>
        </div>

        <Container className="relative z-10 flex flex-col items-center">
          {/* Watermark Number */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-display font-bold text-dark-800/30 select-none pointer-events-none z-0 mix-blend-overlay">
            05
          </div>

          <MotionReveal variant="fadeDown" className="mb-6 flex flex-col items-center gap-4 relative z-10">
            <span className="font-mono text-neutral-500 tracking-widest uppercase text-xs">
              System.Root // Contact
            </span>
            <span className="font-mono text-orange-500 tracking-widest uppercase text-sm">
              // System.Communication
            </span>
          </MotionReveal>
          
          <MotionReveal variant="clipRevealBottom" className="mb-8 max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              Initialize <span className="relative inline-block group">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">Connection</span>
                <span className="absolute bottom-1 md:bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 to-purple-500 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
              </span>
            </h1>
          </MotionReveal>
          
          <MotionReveal variant="fadeUp" delay={200} className="relative z-10">
            <p className="text-xl text-neutral-400 leading-relaxed font-mono max-w-2xl mx-auto">
              Ready to start your next project? Transmit a payload and I'll respond within standard operating parameters.
            </p>
          </MotionReveal>
        </Container>
      </section>

      <SectionDivider />

      {/* Main Content */}
      <section className="py-20 relative bg-dark-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Panel: Info Dashboard */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <MotionReveal variant="fadeRight" delay={100} className="h-full">
                <div className="bg-dark-900 border border-dark-800 rounded-3xl p-6 md:p-8 flex flex-col h-full relative overflow-hidden">
                  
                  {/* Status Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-dark-800 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </div>
                      <span className="font-mono text-sm text-neutral-300">System Operational</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
                      <Clock className="w-3.5 h-3.5" /> {time}
                    </div>
                  </div>

                  {/* Contact Channels (Tabbed) */}
                  <div className="mb-8">
                    <div className="flex gap-2 mb-4 p-1 bg-dark-950 rounded-xl">
                      {(["email", "whatsapp", "location"] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`flex-1 py-2 px-3 rounded-lg text-sm font-mono transition-all ${
                            activeTab === tab 
                              ? "bg-dark-800 text-white shadow-sm" 
                              : "text-neutral-500 hover:text-neutral-300 hover:bg-dark-800/50"
                          }`}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                      ))}
                    </div>
                    
                    <div className="bg-dark-950 rounded-2xl p-6 border border-dark-800 h-40 flex items-center overflow-hidden">
                      <AnimatePresence mode="wait">
                        {activeTab === "email" && (
                          <motion.div key="email" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="w-full">
                            <div className="flex items-center gap-4 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500"><Mail className="w-5 h-5" /></div>
                              <span className="text-sm font-mono text-neutral-400 uppercase tracking-wider">Primary Channel</span>
                            </div>
                            <a href="mailto:luqman@example.com" className="text-lg md:text-xl font-display font-bold text-white hover:text-orange-500 transition-colors">luqman@example.com</a>
                          </motion.div>
                        )}
                        {activeTab === "whatsapp" && (
                          <motion.div key="whatsapp" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="w-full">
                            <div className="flex items-center gap-4 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500"><MessageSquare className="w-5 h-5" /></div>
                              <span className="text-sm font-mono text-neutral-400 uppercase tracking-wider">Direct Message</span>
                            </div>
                            <a href="https://wa.me/62895422783493" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-display font-bold text-white hover:text-purple-500 transition-colors">+62 895-4227-83493</a>
                          </motion.div>
                        )}
                        {activeTab === "location" && (
                          <motion.div key="location" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="w-full">
                            <div className="flex items-center gap-4 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500"><MapPin className="w-5 h-5" /></div>
                              <span className="text-sm font-mono text-neutral-400 uppercase tracking-wider">Base Operations</span>
                            </div>
                            <p className="text-lg md:text-xl font-display font-bold text-white">Indonesia <span className="text-neutral-500 text-sm font-normal block mt-1">Available for remote worldwide</span></p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Availability Heatmap Filler */}
                  <div className="mb-auto">
                    <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2"><Activity className="w-3 h-3" /> Availability Matrix</h4>
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 21 }).map((_, i) => (
                        <div key={i} className={`h-4 rounded-sm ${[0, 4, 8, 14, 19].includes(i) ? 'bg-yellow-500/20 border border-yellow-500/30' : [2, 7, 12, 18].includes(i) ? 'bg-dark-800' : 'bg-green-500/20 border border-green-500/30'}`} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] font-mono text-neutral-600">
                      <span>MON</span><span>SUN</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-dark-800 mt-8">
                    <div className="flex gap-4">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-dark-950 border border-dark-800 flex items-center justify-center font-mono font-bold text-neutral-400 hover:text-white hover:border-white hover:-translate-y-1 transition-all">
                        GH
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-dark-950 border border-dark-800 flex items-center justify-center font-mono font-bold text-neutral-400 hover:text-blue-500 hover:border-blue-500 hover:-translate-y-1 transition-all">
                        LI
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-dark-950 border border-dark-800 flex items-center justify-center font-mono font-bold text-neutral-400 hover:text-pink-500 hover:border-pink-500 hover:-translate-y-1 transition-all">
                        IG
                      </a>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Right Panel: Terminal Form */}
            <div className="lg:col-span-7">
              <MotionReveal variant="fadeLeft" delay={200} className="h-full">
                <div className="bg-dark-900 border border-dark-800 rounded-3xl h-full relative overflow-hidden flex flex-col shadow-2xl">
                  
                  {/* Terminal Header */}
                  <div className="bg-dark-950 border-b border-dark-800 px-6 py-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="font-mono text-xs text-neutral-500 flex items-center gap-2">
                      <Terminal className="w-3 h-3" /> ~/luqmanx/transmit_payload.sh
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-dark-950">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-orange-500 to-purple-500" 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="p-8 md:p-12 flex-1 relative z-10">
                    {/* Matrix Rain / Background for Form */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />

                    {state.succeeded ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500 relative z-10">
                        <div className="relative mb-8">
                          <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
                          <CheckCircle2 className="w-24 h-24 text-green-500 relative z-10" />
                        </div>
                        <h3 className="text-3xl font-display font-bold text-white mb-4">Transmission Successful</h3>
                        <p className="text-neutral-400 text-lg mb-8 max-w-sm mx-auto font-mono text-sm">
                          &gt; Payload received.<br/>&gt; Processing request...<br/>&gt; Awaiting manual response.
                        </p>
                        <Button variant="outline" onClick={() => { window.location.reload() }}>
                          Send Another Sequence
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex flex-col gap-8 h-full relative z-10">
                        <div className="mb-2">
                          <h3 className="text-3xl font-display font-bold text-white mb-2">Compose Payload</h3>
                          <p className="text-neutral-400">Fill parameters below to initialize secure channel.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Name Field */}
                          <div className="relative group">
                            <label htmlFor="name" className={`absolute left-4 px-1 bg-dark-900 transition-all duration-300 font-mono flex items-center gap-1 ${
                                focusedField === 'name' || formData.name ? '-top-2.5 text-orange-500 text-xs' : 'top-4 text-neutral-500'
                              }`}>
                              {focusedField === 'name' && <span className="w-1.5 h-3 bg-orange-500 animate-pulse" />} Name
                            </label>
                            <input id="name" type="text" name="name" required
                              value={formData.name} onChange={handleInputChange}
                              onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                              className="w-full bg-transparent border border-dark-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all group-hover:border-dark-500"
                            />
                          </div>

                          {/* Email Field */}
                          <div className="relative group">
                            <label htmlFor="email" className={`absolute left-4 px-1 bg-dark-900 transition-all duration-300 font-mono flex items-center gap-1 ${
                                focusedField === 'email' || formData.email ? '-top-2.5 text-orange-500 text-xs' : 'top-4 text-neutral-500'
                              }`}>
                              {focusedField === 'email' && <span className="w-1.5 h-3 bg-orange-500 animate-pulse" />} Email Address
                            </label>
                            <input id="email" type="email" name="email" required
                              value={formData.email} onChange={handleInputChange}
                              onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                              className="w-full bg-transparent border border-dark-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all group-hover:border-dark-500"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1 absolute -bottom-5" />
                          </div>
                        </div>

                        {/* Subject Field */}
                        <div className="relative group">
                          <label htmlFor="subject" className={`absolute left-4 px-1 bg-dark-900 transition-all duration-300 font-mono flex items-center gap-1 ${
                              focusedField === 'subject' || formData.subject ? '-top-2.5 text-orange-500 text-xs' : 'top-4 text-neutral-500'
                            }`}>
                            {focusedField === 'subject' && <span className="w-1.5 h-3 bg-orange-500 animate-pulse" />} Subject
                          </label>
                          <input id="subject" type="text" name="subject" required
                            value={formData.subject} onChange={handleInputChange}
                            onFocus={() => setFocusedField('subject')} onBlur={() => setFocusedField(null)}
                            className="w-full bg-transparent border border-dark-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all group-hover:border-dark-500"
                          />
                        </div>

                        {/* Message Field */}
                        <div className="relative group flex-1 flex flex-col">
                          <label htmlFor="message" className={`absolute left-4 px-1 bg-dark-900 transition-all duration-300 font-mono flex items-center gap-1 ${
                              focusedField === 'message' || formData.message ? '-top-2.5 text-orange-500 text-xs' : 'top-4 text-neutral-500'
                            }`}>
                            {focusedField === 'message' && <span className="w-1.5 h-3 bg-orange-500 animate-pulse" />} Message Payload
                          </label>
                          <textarea id="message" name="message" required rows={5}
                            value={formData.message} onChange={handleInputChange}
                            onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                            className="w-full h-full min-h-[160px] bg-transparent border border-dark-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all group-hover:border-dark-500 resize-none font-mono text-sm"
                          />
                          <div className="flex justify-between items-center mt-2 px-1">
                            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
                            <span className="text-xs font-mono text-neutral-600 ml-auto">{formData.message.length} chars</span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <Button type="submit" variant="gradient" size="lg" className="w-full relative overflow-hidden group/submit" disabled={state.submitting} magnetic>
                            <span className="relative z-10 flex items-center justify-center font-mono font-bold tracking-wider">
                              {state.submitting ? (
                                <><Loader2 className="w-5 h-5 animate-spin mr-2" /> EXECUTING...</>
                              ) : (
                                <>
                                  <span className="group-hover/submit:hidden flex items-center gap-2">TRANSMIT DATA <Send className="w-5 h-5" /></span>
                                  <span className="hidden group-hover/submit:flex items-center gap-2">&gt; ./transmit.sh <ArrowRight className="w-5 h-5" /></span>
                                </>
                              )}
                            </span>
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </MotionReveal>
            </div>
            
          </div>
        </Container>
      </section>
    </>
  )
}
