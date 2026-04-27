import Link from "next/link"
import { ArrowRight, Code2, LayoutTemplate, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/Button"
import { GradientText } from "@/components/ui/GradientText"
import { ScrollReveal } from "@/components/effects/ScrollReveal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

const projects = [
  {
    id: "edge-mind",
    title: "Edge Mind",
    description: "A digital book platform with brutalist design and lead capture system.",
    problem: "Create an engaging platform for digital knowledge products that breaks away from standard SaaS designs.",
    solution: "Developed a Laravel-based platform with a highly cinematic UI, GSAP animations for storytelling, and a strategic lead gating system.",
    features: [
      "Lead capture flow with session validation",
      "Catalog system for digital products",
      "Responsive brutalist design system",
      "Scroll-driven animations and interactions"
    ],
    tech: ["Laravel", "PHP", "Tailwind CSS", "GSAP", "MySQL"],
    icon: <Code2 className="w-16 h-16 text-dark-600" />,
  },
  {
    id: "jarreva-creative",
    title: "Jarreva Creative",
    description: "Creative agency website with dynamic visual identity.",
    problem: "Build a professional agency presence that stands out while providing a clear conversion path.",
    solution: "Designed and developed a modern multi-page Next.js website with strong branding, seamless page transitions, and contact flow.",
    features: [
      "Dynamic service showcase",
      "Interactive portfolio display",
      "Optimized contact system",
      "Fully responsive modern architecture"
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    icon: <LayoutTemplate className="w-16 h-16 text-dark-600" />,
  }
]

export default function Portfolio() {
  return (
    <div className="flex flex-col w-full pb-24">
      <section className="pt-32 pb-16">
        <Container>
          <ScrollReveal>
            <SectionHeader
              label="PORTFOLIO"
              title={<>Real projects. Real solutions. <br/><GradientText>Real impact.</GradientText></>}
              description="A selection of my recent work spanning landing pages to full-stack systems."
            />
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="flex flex-col gap-24">
            {projects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 100}>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  
                  {/* Visual Left */}
                  <div className={`order-1 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Card className="p-0 overflow-hidden aspect-video flex items-center justify-center bg-dark-800 border-dark-700">
                       <div className="absolute inset-0 bg-gradient-to-tr from-dark-900 to-transparent z-10 opacity-50" />
                       <div className="relative z-20">
                         {project.icon}
                       </div>
                    </Card>
                  </div>

                  {/* Content Right */}
                  <div className={`order-2 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(t => (
                        <Badge key={t} variant="outline">{t}</Badge>
                      ))}
                    </div>
                    
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                      {project.title}
                    </h2>
                    
                    <div className="space-y-6 text-neutral-400">
                      <div>
                        <h4 className="text-neutral-200 font-bold mb-2">Overview</h4>
                        <p>{project.description}</p>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-neutral-200 font-bold mb-2">Problem</h4>
                          <p className="text-sm">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-neutral-200 font-bold mb-2">Solution</h4>
                          <p className="text-sm">{project.solution}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-neutral-200 font-bold mb-2">Key Features</h4>
                        <ul className="list-disc list-inside text-sm space-y-1 ml-1">
                          {project.features.map(f => <li key={f}>{f}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                      <Button variant="primary" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                        </a>
                      </Button>
                      <Button variant="secondary" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <FaGithub className="w-4 h-4 mr-2" /> GitHub
                        </a>
                      </Button>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-32">
        <Container>
          <ScrollReveal>
            <Card gradientAccent className="p-12 text-center bg-dark-800/50">
              <h2 className="text-3xl font-display font-bold text-white mb-4">Have a project in mind?</h2>
              <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                Let's discuss how we can build something great together.
              </p>
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </Card>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  )
}
