"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { GradientText } from "@/components/ui/GradientText"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/layout/Container"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-display font-bold tracking-tight z-50 relative">
            Luqman<GradientText>X</GradientText>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-neutral-100",
                  pathname === link.href ? "text-neutral-100" : "text-neutral-400"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-px h-6 bg-dark-700" />
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-neutral-300 hover:text-white z-50 relative p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-dark-950 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 text-xl font-display font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "pb-2 border-b border-dark-800 transition-colors",
                pathname === link.href ? "text-orange-500" : "text-neutral-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-8">
            <Button variant="gradient" size="lg" className="w-full" asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
