import Link from "next/link"
import { ArrowRight, LayoutTemplate, Code2, Server, Check } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/Button"
import { GradientText } from "@/components/ui/GradientText"
import { ScrollReveal } from "@/components/effects/ScrollReveal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"

const services = [
  {
    icon: <LayoutTemplate className="w-8 h-8 text-orange-500" />,
    title: "Landing Page Development",
    desc: "High-converting single-page websites for businesses & personal brands.",
    deliverables: ["Custom Design", "Responsive Layout", "Basic SEO", "Performance Optimization"]
  },
  {
    icon: <Code2 className="w-8 h-8 text-purple-500" />,
    title: "Full Website Development",
    desc: "Multi-page websites with custom design and smooth functionality.",
    deliverables: ["Custom Design", "3-7 Pages", "CMS Integration (Optional)", "Advanced Animations"]
  },
  {
    icon: <Server className="w-8 h-8 text-orange-500" />,
    title: "Simple Web Systems",
    desc: "Basic web applications like dashboards, booking systems, or inventories.",
    deliverables: ["Requirements Analysis", "Database Architecture", "Custom Development", "Deployment Support"]
  }
]

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "Understanding your needs, goals, and target audience to define project scope."
  },
  {
    step: "02",
    title: "Design",
    desc: "Creating wireframes and visual direction to ensure we align on aesthetics."
  },
  {
    step: "03",
    title: "Develop",
    desc: "Building the solution with clean, maintainable code and modern frameworks."
  },
  {
    step: "04",
    title: "Deliver",
    desc: "Rigorous testing, final deployment, and handoff to ensure a seamless launch."
  }
]

const faqs = [
  {
    q: "What technologies do you use?",
    a: "I primarily work with Next.js, React, and Tailwind CSS for the frontend, and Laravel/PHP for backend systems. I choose the best tool depending on your project's specific needs."
  },
  {
    q: "How long does a project take?",
    a: "A landing page usually takes 1-2 weeks. Multi-page websites take 3-4 weeks, and custom web systems can take 1-2 months depending on complexity."
  },
  {
    q: "Do you offer maintenance?",
    a: "Yes, I offer ongoing maintenance and support packages to ensure your website or system stays secure, updated, and performs optimally."
  },
  {
    q: "What's your revision policy?",
    a: "I typically include 2 major revision rounds during the design phase, and minor tweaks during development to ensure you are 100% satisfied with the final product."
  }
]

export default function Services() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Hero */}
      <section className="pt-32 pb-16">
        <Container>
          <ScrollReveal>
            <SectionHeader
              label="SERVICES"
              title={<>From concept to code — <br/>I build solutions that <GradientText>work.</GradientText></>}
              description="Whether you need a simple landing page or a complex web system, I provide end-to-end development services tailored to your needs."
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ScrollReveal key={service.title} delay={idx * 100}>
                <Card className={`h-full flex flex-col p-8 ${idx === 1 ? 'gradientAccent' : ''}`}>
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${idx === 1 ? 'bg-purple-500/10' : 'bg-orange-500/10'}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-neutral-400 mb-8">{service.desc}</p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-bold text-neutral-300 uppercase tracking-wider mb-4">Deliverables</h4>
                    <ul className="space-y-3 mb-8">
                      {service.deliverables.map(d => (
                        <li key={d} className="flex items-start text-sm text-neutral-400">
                          <Check className="w-4 h-4 text-orange-500 mr-2 mt-0.5 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant={idx === 1 ? "primary" : "secondary"} className="w-full" asChild>
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-dark-800 bg-dark-900/50">
        <Container>
          <ScrollReveal>
            <SectionHeader label="PROCESS" title="How We Work" align="center" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-dark-700 z-0" />
            
            {process.map((p, idx) => (
              <ScrollReveal key={p.step} delay={idx * 100} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-dark-900 border-4 border-dark-800 flex items-center justify-center text-3xl font-display font-bold text-white mb-6 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                  {p.step}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{p.title}</h3>
                <p className="text-neutral-400 text-sm max-w-[250px]">{p.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing / FAQ */}
      <section className="py-24 border-t border-dark-800">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <SectionHeader label="PRICING" title="Simple Pricing" className="mb-8" />
              <div className="space-y-4">
                <Card className="flex items-center justify-between p-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Starter</h4>
                    <p className="text-sm text-neutral-400">Landing page, 1-3 sections</p>
                  </div>
                  <Button variant="ghost" asChild>
                    <Link href="/contact">Contact for quote</Link>
                  </Button>
                </Card>
                <Card className="flex items-center justify-between p-6 gradientAccent border-orange-500/30">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Professional</h4>
                    <p className="text-sm text-neutral-400">Multi-page site, custom design</p>
                  </div>
                  <Button variant="primary" asChild>
                    <Link href="/contact">Contact for quote</Link>
                  </Button>
                </Card>
                <Card className="flex items-center justify-between p-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Custom</h4>
                    <p className="text-sm text-neutral-400">Web app / full system</p>
                  </div>
                  <Button variant="ghost" asChild>
                    <Link href="/contact">Contact for quote</Link>
                  </Button>
                </Card>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <SectionHeader label="FAQ" title="Common Questions" className="mb-8" />
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-dark-800 pb-6 last:border-0 last:pb-0">
                    <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
                    <p className="text-neutral-400 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pt-16">
        <Container>
          <ScrollReveal>
            <Card gradientAccent className="p-12 text-center bg-dark-800/50">
              <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to start your project?</h2>
              <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                Let's discuss your requirements and how I can help bring your vision to life.
              </p>
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">Let's Talk</Link>
              </Button>
            </Card>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  )
}
