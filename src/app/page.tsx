import { Container } from "@/components/layout/Container"
import { MotionReveal } from "@/components/effects/MotionReveal"
import { TextReveal } from "@/components/effects/TextReveal"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { TechStackTicker } from "@/components/ui/TechStackTicker"
import { ParticleField } from "@/components/effects/ParticleField"
import { CodeBlock } from "@/components/effects/CodeBlock"
import { CountUp } from "@/components/effects/CountUp"
import { SectionDivider } from "@/components/effects/SectionDivider"
import { HeroGrid } from "@/components/effects/HeroGrid"
import Link from "next/link"
import { ArrowRight, Code2, Database, Layout, Server, Sparkles, ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Grid & Particles */}
        <HeroGrid />
        <ParticleField />
        
        {/* Animated Scan Line */}
        <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none">
          <div className="scan-line" />
        </div>
        
        <Container className="relative z-10">
          {/* Watermark Number */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-display font-bold text-dark-800/30 select-none pointer-events-none z-0 mix-blend-overlay">
            01
          </div>

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
            <MotionReveal variant="fadeDown" className="mb-6 flex flex-col items-center gap-4">
              <span className="font-mono text-neutral-500 tracking-widest uppercase text-xs">
                System.Root // Home
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800/50 border border-dark-700 text-sm text-neutral-300 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Available for new opportunities
              </span>
            </MotionReveal>

            <MotionReveal variant="clipRevealBottom" delay={200} className="mb-6 overflow-visible">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight leading-[1.1]">
                Engineering <br className="hidden md:block" />
                <span className="relative inline-block group">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">Digital</span>
                  {/* Animated underline */}
                  <span className="absolute bottom-1 md:bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 to-purple-500 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
                </span> Excellence
              </h1>
            </MotionReveal>

            <MotionReveal variant="fadeUp" delay={400} className="mb-10 max-w-2xl mx-auto">
              <p className="text-xl text-neutral-400 font-mono">
                <TextReveal delay={600}>I build high-performance web systems and premium interactive experiences.</TextReveal>
                <span className="inline-block w-2 h-5 ml-1 bg-orange-500 animate-pulse align-middle" />
              </p>
            </MotionReveal>

            <MotionReveal variant="fadeUp" delay={1000} className="flex flex-col sm:flex-row items-center gap-4">
              <Button variant="gradient" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/portfolio">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto group" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Let's Talk 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MotionReveal>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <MotionReveal variant="fadeDown" delay={1500} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 border border-dark-700 rounded-full flex justify-center p-1 relative overflow-hidden bg-dark-900/50 backdrop-blur-sm">
            <div className="w-1 h-2 bg-orange-500 rounded-full animate-[float_1.5s_infinite]" />
          </div>
        </MotionReveal>
      </section>

      {/* Tech Stack Ticker */}
      <TechStackTicker />

      {/* About Brief Section */}
      <section className="section-padding relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                count="01"
                label="System.Identity"
                title={<>Developer by day. <br/><span className="text-neutral-500">Architect by nature.</span></>}
                description="I am an Information Systems student with a passion for building robust, scalable web applications. I bridge the gap between complex backend logic and seamless frontend user experiences."
              />
              
              <div className="grid grid-cols-2 gap-6 mt-12">
                <Card variant="stat" hoverable>
                  <div className="text-4xl font-display font-bold text-white mb-2">
                    <CountUp to={3} suffix="+" />
                  </div>
                  <div className="text-sm text-neutral-400">Years Coding</div>
                </Card>
                <Card variant="stat" hoverable>
                  <div className="text-4xl font-display font-bold text-white mb-2">
                    <CountUp to={15} suffix="+" />
                  </div>
                  <div className="text-sm text-neutral-400">Projects Completed</div>
                </Card>
              </div>
            </div>
            
            <MotionReveal variant="fadeLeft" delay={300} className="relative perspective-[1000px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-50" />
              <CodeBlock 
                code={`{
  "name": "LuqmanX",
  "role": "Full Stack Developer",
  "education": "Information Systems",
  "focus": [
    "Frontend Architecture",
    "Backend Systems",
    "Interactive UI/UX"
  ],
  "technologies": {
    "frontend": ["React", "Next.js", "Tailwind", "Framer"],
    "backend": ["PHP", "Laravel", "Node.js"],
    "database": ["MySQL", "PostgreSQL"]
  },
  "status": "Ready for new challenges"
}`}
                className="rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-500"
              />
            </MotionReveal>
          </div>
        </Container>
      </section>
      
      <SectionDivider />

      {/* Featured Work */}
      <section className="section-padding relative bg-dark-900/30">
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeader
              count="02"
              label="System.Output"
              title="Featured Deployments"
              description="A selection of my recent technical projects and applications."
              className="mb-0"
            />
            <MotionReveal variant="fadeLeft">
              <Button variant="outline" asChild className="group">
                <Link href="/portfolio" className="flex items-center gap-2">
                  View All Projects 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MotionReveal>
          </div>

          <div className="flex flex-col gap-12">
            {[1, 2].map((i) => (
              <MotionReveal key={i} variant="fadeUp" delay={i * 200}>
                <Card variant="project" tilt hoverable className="group/project border-dark-700 bg-dark-900">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
                    {/* Project Image Area */}
                    <div className="relative h-64 md:h-auto overflow-hidden bg-dark-800 border-r border-dark-700">
                      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay z-10" />
                      {/* Abstract placeholder - would be real image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center overflow-hidden">
                        <div className={`w-3/4 h-3/4 rounded-xl border border-dark-700 shadow-2xl transition-transform duration-700 group-hover/project:scale-105 ${i === 1 ? 'bg-orange-900/20' : 'bg-purple-900/20'}`}>
                           <div className="w-full h-8 bg-dark-800 border-b border-dark-700 flex items-center px-4 gap-2 rounded-t-xl">
                              <div className="w-2 h-2 rounded-full bg-red-500" />
                              <div className="w-2 h-2 rounded-full bg-yellow-500" />
                              <div className="w-2 h-2 rounded-full bg-green-500" />
                           </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Info Area */}
                    <div className="p-10 flex flex-col justify-center relative overflow-hidden">
                      {/* Background Watermark */}
                      <div className="absolute -right-10 -bottom-10 text-[12rem] font-display font-bold text-dark-800 select-none pointer-events-none opacity-50 transition-transform duration-500 group-hover/project:-translate-x-4">
                        0{i}
                      </div>

                      <div className="relative z-10">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {["React", "Next.js", "Tailwind CSS"].map((tech, idx) => (
                            <span key={tech} className="px-3 py-1 text-xs font-mono text-neutral-400 bg-dark-800 border border-dark-700 rounded-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover/project:text-orange-500 transition-colors">
                          {i === 1 ? "Edge Mind Platform" : "Jarreva E-Commerce"}
                        </h3>
                        <p className="text-neutral-400 leading-relaxed mb-8">
                          {i === 1 
                            ? "A high-performance brutalist web platform featuring scroll-driven animations, GSAP orchestrations, and a custom lead generation system."
                            : "A full-stack e-commerce solution with real-time inventory management, secure checkout flows, and an intuitive admin dashboard."}
                        </p>
                        <Link href={`/portfolio/${i}`} className="inline-flex items-center gap-2 text-white font-medium hover:text-orange-500 transition-colors group/link">
                          Explore Architecture
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* Services Overview */}
      <section className="section-padding relative">
        <Container>
          <SectionHeader
            count="03"
            label="System.Capabilities"
            title="Technical Services"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <MotionReveal variant="fadeUp" delay={100} className="md:col-span-2">
              <Card variant="service" hoverable gradientAccent>
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 text-orange-500">
                  <Layout className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">Frontend Architecture</h3>
                <p className="text-neutral-400 mb-6">Building performant, accessible, and highly interactive user interfaces using modern React ecosystem tools.</p>
                <ul className="flex flex-col gap-2 mt-auto w-full">
                  {['React & Next.js', 'Complex Animations', 'Responsive Design'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-neutral-300">
                      <Sparkles className="w-4 h-4 text-orange-500" /> {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </MotionReveal>

            <MotionReveal variant="fadeUp" delay={200}>
              <Card variant="service" hoverable>
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-500">
                  <Server className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Backend Systems</h3>
                <p className="text-neutral-400 text-sm mb-6">Robust API development and database architecture design.</p>
                <ul className="flex flex-col gap-2 mt-auto w-full border-t border-dark-800 pt-4">
                  <li className="flex items-center gap-2 text-sm text-neutral-300"><Code2 className="w-4 h-4 text-purple-500" /> Laravel / PHP</li>
                  <li className="flex items-center gap-2 text-sm text-neutral-300"><Database className="w-4 h-4 text-purple-500" /> RESTful APIs</li>
                </ul>
              </Card>
            </MotionReveal>
          </div>
          
          <div className="mt-12 text-center">
            <MotionReveal variant="fadeUp" delay={300}>
              <Button variant="outline" asChild>
                <Link href="/services">View All Capabilities</Link>
              </Button>
            </MotionReveal>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-dark-950/0 to-dark-950/0 mix-blend-screen pointer-events-none" />
        
        <Container className="relative z-10 text-center">
          <MotionReveal variant="scaleIn">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">initialize?</span>
            </h2>
          </MotionReveal>
          
          <MotionReveal variant="fadeUp" delay={200}>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
              Let's discuss how my technical skills can solve your business problems and elevate your digital presence.
            </p>
          </MotionReveal>
          
          <MotionReveal variant="fadeUp" delay={400}>
            <Button variant="gradient" size="lg" className="h-16 px-12 text-xl" magnetic asChild>
              <Link href="/contact">Start the Conversation</Link>
            </Button>
          </MotionReveal>
        </Container>
      </section>
    </>
  )
}
