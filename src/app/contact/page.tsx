"use client"

import * as React from "react"
import { Send, Mail, MapPin } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/Button"
import { GradientText } from "@/components/ui/GradientText"
import { ScrollReveal } from "@/components/effects/ScrollReveal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
    }, 1500)
  }

  return (
    <div className="flex flex-col w-full pb-24">
      <section className="pt-32 pb-16">
        <Container>
          <ScrollReveal>
            <SectionHeader
              label="CONTACT"
              title={<>Let's <GradientText>Connect</GradientText></>}
              description="Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you as soon as possible."
              align="center"
            />
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info (Left) */}
            <ScrollReveal direction="left" className="lg:col-span-2 space-y-6">
              <Card className="p-8 bg-dark-900 border-dark-700">
                <h3 className="text-2xl font-display font-bold text-white mb-6">Contact Info</h3>
                
                <div className="space-y-6">
                  <a href="mailto:luqman@example.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-dark-800 flex items-center justify-center text-neutral-400 group-hover:text-orange-500 group-hover:bg-orange-500/10 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 font-bold mb-1">Email</p>
                      <p className="text-neutral-300 group-hover:text-white transition-colors">luqman@example.com</p>
                    </div>
                  </a>

                  <a href="https://wa.me/62895422783493" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-dark-800 flex items-center justify-center text-neutral-400 group-hover:text-green-500 group-hover:bg-green-500/10 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 font-bold mb-1">WhatsApp</p>
                      <p className="text-neutral-300 group-hover:text-white transition-colors">+62 895-4227-83493</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-dark-800 flex items-center justify-center text-neutral-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 font-bold mb-1">Location</p>
                      <p className="text-neutral-300">Indonesia</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-dark-800">
                  <h4 className="text-sm font-bold text-neutral-400 mb-4 uppercase tracking-wider">Social Profiles</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-orange-500 transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-orange-500 transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Form (Right) */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <Card gradientAccent className="p-8 sm:p-10 bg-dark-900 h-full">
                {formStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white">Message Sent!</h3>
                    <p className="text-neutral-400 max-w-md">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <Button variant="secondary" onClick={() => setFormStatus("idle")} className="mt-8">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-neutral-300">Full Name</label>
                        <input
                          id="name"
                          required
                          className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium text-neutral-300">Project Type (Optional)</label>
                      <select 
                        id="projectType"
                        className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors appearance-none"
                      >
                        <option value="">Select a project type...</option>
                        <option value="landing-page">Landing Page</option>
                        <option value="website">Full Website</option>
                        <option value="web-app">Web Application</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-neutral-300">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                        placeholder="Tell me about your project, goals, and timeline..."
                      ></textarea>
                    </div>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="w-full text-lg h-14"
                      disabled={formStatus === "submitting"}
                    >
                      {formStatus === "submitting" ? (
                        <span className="flex items-center">Sending...</span>
                      ) : (
                        <span className="flex items-center">Send Message <Send className="ml-2 w-5 h-5" /></span>
                      )}
                    </Button>
                    <p className="text-xs text-center text-neutral-500 mt-4">
                      Typical response time: &lt; 24 hours. No commitment required.
                    </p>
                  </form>
                )}
              </Card>
            </ScrollReveal>

          </div>
        </Container>
      </section>
    </div>
  )
}
