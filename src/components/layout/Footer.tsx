import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/ui/GradientText"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 border-t border-dark-800 pt-16 pb-8 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-display font-bold tracking-tight inline-block mb-4">
              Luqman<GradientText>X</GradientText>
            </Link>
            <p className="text-neutral-400 max-w-sm mb-6">
              Information Systems Student & Web Developer. Building digital systems with precision and style.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:luqman@example.com" className="text-neutral-400 hover:text-orange-500 transition-colors">
                Email
              </a>
              <a href="https://wa.me/62895422783493" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-orange-500 transition-colors">
                WhatsApp
              </a>
              <a href="#" className="text-neutral-400 hover:text-orange-500 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-neutral-400 hover:text-orange-500 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-neutral-100 mb-4">Navigation</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-neutral-400 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-neutral-400 hover:text-orange-500 transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="text-neutral-400 hover:text-orange-500 transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="text-neutral-400 hover:text-orange-500 transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-neutral-100 mb-4">Ready to build?</h3>
            <p className="text-neutral-400 mb-4">
              Let's create something impactful together.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-lg bg-dark-800 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-dark-700 transition-colors border border-dark-700"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {currentYear} LuqmanX. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-500 font-mono">
            <span>Built with</span>
            <span className="text-orange-500">Precision</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
