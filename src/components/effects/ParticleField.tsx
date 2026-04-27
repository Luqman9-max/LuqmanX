"use client"

import * as React from "react"
import { useMousePosition } from "@/lib/hooks/useMousePosition"

interface Particle {
  x: number
  y: number
  size: number
  vx: number
  vy: number
  color: string
}

export function ParticleField() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const { x: mouseX, y: mouseY } = useMousePosition()
  
  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    let animationFrameId: number
    let particles: Particle[] = []
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }
    
    const initParticles = () => {
      particles = []
      const numParticles = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 10000), 100)
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          color: Math.random() > 0.5 ? "rgba(249, 115, 22, 0.4)" : "rgba(168, 85, 247, 0.4)"
        })
      }
    }
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((p, i) => {
        // Move
        p.x += p.vx
        p.y += p.vy
        
        // Wrap
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        
        // Mouse interaction
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 150) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouseX, mouseY)
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - dist / 1500})`
          ctx.stroke()
          
          // Slight repulsion
          p.x -= dx * 0.01
          p.y -= dy * 0.01
        }
        
        // Draw
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })
      
      animationFrameId = requestAnimationFrame(drawParticles)
    }
    
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawParticles()
    
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mouseX, mouseY])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-50"
    />
  )
}
