"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
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

  const { scrollY } = useScroll()
  
  // 3-tier scroll state transformations
  const headerHeight = useTransform(scrollY, [0, 80], [80, 64])
  const headerBgColor = useTransform(scrollY, [0, 40, 80], ["rgba(10, 10, 15, 0)", "rgba(10, 10, 15, 0.4)", "rgba(10, 10, 15, 0.85)"])
  const headerBorderOpacity = useTransform(scrollY, [40, 80], [0, 1])
  const headerBlur = useTransform(scrollY, [0, 40, 80], [0, 8, 16])
  const logoScale = useTransform(scrollY, [0, 80], [1.1, 1])
  
  const backdropFilterStyle = useTransform(headerBlur, (blur) => `blur(${blur}px)`)

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          height: headerHeight,
          backgroundColor: headerBgColor,
          backdropFilter: backdropFilterStyle,
          WebkitBackdropFilter: backdropFilterStyle,
        }}
      >
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dark-700 to-transparent"
          style={{ opacity: headerBorderOpacity }}
        />
        
        <Container className="h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.div style={{ scale: logoScale }} className="origin-left">
              <Link href="/" className="text-xl font-display font-bold tracking-tight z-50 relative group flex items-center">
                <span className="group-hover:text-orange-500 transition-colors">Luqman</span>
                <motion.span
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="inline-block origin-center ml-[1px]"
                >
                  <GradientText>X</GradientText>
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 h-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors relative flex items-center h-full group",
                      isActive ? "text-neutral-100" : "text-neutral-400 hover:text-neutral-100"
                    )}
                  >
                    {link.name}
                    {isActive ? (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute bottom-[calc(50%-1.25rem)] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    ) : (
                      <div className="absolute bottom-[calc(50%-1.25rem)] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                )
              })}
              <div className="w-px h-6 bg-dark-800" />
              <Button variant="gradient" size="sm" magnetic asChild className="shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                <Link href="/contact">Let's Talk</Link>
              </Button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-neutral-300 hover:text-white z-50 relative p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-950/90 md:hidden flex flex-col pt-24 px-6 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-dark-950 to-dark-950 pointer-events-none" />
            <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
            
            <nav className="flex flex-col gap-6 text-4xl font-display font-bold relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20, rotateX: 20 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  exit={{ opacity: 0, x: -20, transition: { delay: i * 0.05 } }}
                  transition={{ delay: 0.1 + i * 0.05, type: "spring", damping: 15 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block pb-4 border-b border-dark-800 transition-colors relative group",
                      pathname === link.href ? "text-orange-500" : "text-neutral-300"
                    )}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <motion.div 
                        layoutId="mobile-nav-active"
                        className="absolute bottom-0 left-0 w-1/4 h-[2px] bg-orange-500" 
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Button variant="gradient" size="lg" className="w-full text-xl py-6" asChild>
                  <Link href="/contact">Start a Project</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
