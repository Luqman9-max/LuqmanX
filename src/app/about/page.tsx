import Link from "next/link"
import { ArrowRight, CheckCircle2, GraduationCap, Target } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/Button"
import { GradientText } from "@/components/ui/GradientText"
import { ScrollReveal } from "@/components/effects/ScrollReveal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"

const skills = [
  { name: "Frontend", tools: "React, Next.js, HTML/CSS, Tailwind CSS, TypeScript" },
  { name: "Backend", tools: "Laravel, PHP, Node.js" },
  { name: "Database", tools: "MySQL, PostgreSQL" },
  { name: "Tools", tools: "Git, VS Code, Figma" },
]

const values = [
  {
    icon: <Target className="w-6 h-6 text-orange-500" />,
    title: "Precision",
    desc: "Every pixel, every query, every system — intentional."
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
    title: "Growth",
    desc: "Always learning, always improving."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-orange-500" />,
    title: "Impact",
    desc: "Building things that matter for real people."
  }
]

export default function About() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* 5.1 Hero */}
      <section className="pt-32 pb-16">
        <Container className="text-center">
          <ScrollReveal>
            <SectionHeader
              label="ABOUT ME"
              title={<>The Architect Behind <GradientText>LuqmanX</GradientText></>}
              align="center"
              className="mb-8"
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            {/* Avatar placeholder */}
            <div className="mx-auto w-48 h-48 rounded-full border-2 border-dark-700 bg-dark-800 relative p-2 mb-8">
              <div className="w-full h-full rounded-full bg-dark-900 border border-dark-800 flex items-center justify-center overflow-hidden relative">
                 {/* Real photo can go here */}
                 <span className="text-4xl font-display font-bold text-dark-700">LX</span>
                 <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-purple-500/20" />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 5.2 Story */}
      <section className="py-16">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-neutral-400 leading-relaxed">
              <p>
                <strong className="text-neutral-200">Hi, I'm Luqman.</strong> I'm an Information Systems student with a passion for web development. My journey into tech started with a curiosity about how digital systems operate behind the scenes.
              </p>
              <p>
                What fascinates me most is the intersection of <strong className="text-orange-500">system design</strong> and <strong className="text-purple-400">creative frontend execution</strong>. It's not enough for an application to just look good; the underlying architecture must be solid, scalable, and logical.
              </p>
              <p>
                Over the past two years, I've immersed myself in modern web technologies—from mastering the intricacies of Laravel for robust backend systems to building dynamic, highly-responsive user interfaces with Next.js and Tailwind CSS.
              </p>
              <p>
                My goal is to continue building digital products that solve real problems while delivering a premium, memorable user experience.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 5.3 Skills */}
      <section className="py-24 bg-dark-900/50 border-y border-dark-800">
        <Container>
          <ScrollReveal>
            <SectionHeader label="EXPERTISE" title="Skills & Tools" />
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <ScrollReveal direction="left" delay={100} className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-display font-bold text-neutral-200">{skill.name}</span>
                  </div>
                  <div className="w-full bg-dark-800 rounded-full h-2 mb-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-purple-500 h-2 rounded-full w-[85%]" />
                  </div>
                  <p className="text-sm text-neutral-400 font-mono">{skill.tools}</p>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <Card className="h-full p-8 gradientAccent">
                <h3 className="text-2xl font-display font-bold text-white mb-6">System Skills</h3>
                <ul className="space-y-4">
                  {[
                    "System Analysis & Design",
                    "Database Architecture",
                    "Problem Solving & Debugging",
                    "UI/UX Implementation",
                    "Project Management"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-neutral-300">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 5.5 Values */}
      <section className="py-24">
        <Container>
          <ScrollReveal>
            <SectionHeader label="PHILOSOPHY" title="What Drives Me" align="center" />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <Card className="h-full p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-dark-800 flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-neutral-400">{value.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5.6 CTA */}
      <section className="pt-16">
        <Container>
          <ScrollReveal>
            <Card gradientAccent className="p-12 text-center bg-dark-800/50">
              <h2 className="text-3xl font-display font-bold text-white mb-4">Want to work together?</h2>
              <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                I'm currently available for freelance projects and exciting collaborations.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </Card>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  )
}
