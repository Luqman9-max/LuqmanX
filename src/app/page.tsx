import Link from "next/link"
import { ArrowRight, Code2, LayoutTemplate, Server } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/Button"
import { GradientText } from "@/components/ui/GradientText"
import { ScrollReveal } from "@/components/effects/ScrollReveal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 4.1 Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-20 overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />
        
        <Container className="relative z-10 flex flex-col items-center text-center">
          <ScrollReveal delay={100}>
            <span className="font-mono text-orange-500 text-sm tracking-widest uppercase mb-6 block">
              // HELLO WORLD
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight">
              I'm Luqman<GradientText>X</GradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h2 className="text-2xl md:text-3xl text-neutral-300 font-medium mb-4">
              Information Systems Student & Web Developer
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
              Building Digital Systems with Precision & Style
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500} className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/portfolio">
                View My Work <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </ScrollReveal>
        </Container>
      </section>

      {/* 4.2 Brief About Section */}
      <section className="py-24 border-t border-dark-800 bg-dark-900/50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <SectionHeader
                label="ABOUT ME"
                title={<>System Thinking meets <br/>Creative Execution</>}
                description="I combine my background in Information Systems with modern web development to build applications that don't just look great, but function logically and efficiently."
              />
              <Button variant="ghost" asChild className="mt-4 -ml-4">
                <Link href="/about" className="group">
                  Read Full Story <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </ScrollReveal>
            
            <ScrollReveal direction="right" className="grid grid-cols-2 gap-4">
              <Card className="flex flex-col items-center justify-center text-center p-8">
                <span className="text-4xl font-display font-bold text-white mb-2">3+</span>
                <span className="text-neutral-400 font-medium">Projects Built</span>
              </Card>
              <Card className="flex flex-col items-center justify-center text-center p-8">
                <span className="text-4xl font-display font-bold text-white mb-2">2+</span>
                <span className="text-neutral-400 font-medium">Years Learning</span>
              </Card>
              <Card className="flex flex-col items-center justify-center text-center p-8 col-span-2 gradientAccent">
                <span className="text-2xl font-display font-bold text-white mb-2">IS Major</span>
                <span className="text-neutral-400 font-medium">University Student</span>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 4.3 Featured Work */}
      <section className="py-24 border-t border-dark-800">
        <Container>
          <ScrollReveal>
            <SectionHeader
              label="SELECTED WORK"
              title="Featured Projects"
              align="center"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Project 1 */}
            <ScrollReveal delay={100}>
              <Card hoverable className="group p-0 overflow-hidden flex flex-col h-full">
                <div className="h-64 bg-dark-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent z-10" />
                  <div className="w-full h-full bg-dark-700 flex items-center justify-center">
                    {/* Placeholder for project image */}
                    <Code2 className="w-16 h-16 text-dark-600" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-20 -mt-10">
                  <div className="flex gap-2 mb-4">
                    <Badge variant="orange">Laravel</Badge>
                    <Badge variant="purple">Tailwind CSS</Badge>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    Edge Mind
                  </h3>
                  <p className="text-neutral-400 mb-6 flex-grow">
                    A digital book platform with brutalist design and lead capture system.
                  </p>
                  <Button variant="ghost" className="-ml-4 w-fit" asChild>
                    <Link href="/portfolio">View Case Study <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </Card>
            </ScrollReveal>

            {/* Project 2 */}
            <ScrollReveal delay={200}>
              <Card hoverable className="group p-0 overflow-hidden flex flex-col h-full">
                <div className="h-64 bg-dark-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent z-10" />
                  <div className="w-full h-full bg-dark-700 flex items-center justify-center">
                    {/* Placeholder for project image */}
                    <LayoutTemplate className="w-16 h-16 text-dark-600" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-20 -mt-10">
                  <div className="flex gap-2 mb-4">
                    <Badge variant="orange">Next.js</Badge>
                    <Badge variant="purple">React</Badge>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    Jarreva Creative
                  </h3>
                  <p className="text-neutral-400 mb-6 flex-grow">
                    Creative agency website with dynamic visual identity.
                  </p>
                  <Button variant="ghost" className="-ml-4 w-fit" asChild>
                    <Link href="/portfolio">View Case Study <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          <div className="mt-16 text-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* 4.4 Services Overview */}
      <section className="py-24 border-t border-dark-800 bg-dark-900/50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              label="WHAT I DO"
              title="Services"
              align="center"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <ScrollReveal delay={100}>
              <Card hoverable className="h-full flex flex-col items-start p-8">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
                  <LayoutTemplate className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Landing Pages</h3>
                <p className="text-neutral-400 mb-6 flex-grow">
                  High-converting single-page websites for businesses & personal brands.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hoverable className="h-full flex flex-col items-start p-8 gradientAccent">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Web Development</h3>
                <p className="text-neutral-400 mb-6 flex-grow">
                  Multi-page websites with custom design and smooth functionality.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card hoverable className="h-full flex flex-col items-start p-8">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Web Systems</h3>
                <p className="text-neutral-400 mb-6 flex-grow">
                  Basic web applications like dashboards, booking systems, or inventories.
                </p>
              </Card>
            </ScrollReveal>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="ghost" asChild>
              <Link href="/services" className="group">
                See Detailed Offerings <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* 4.6 Final CTA */}
      <section className="py-32 border-t border-dark-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <Container className="relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Let's Build Something <GradientText>Together</GradientText>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
              Got a project in mind? I'm available for freelance work and open to new opportunities.
            </p>
            <Button variant="gradient" size="lg" asChild className="px-10 py-6 text-lg">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  )
}
