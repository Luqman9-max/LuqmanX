"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export type AtmosphereVariant = "converge" | "streams" | "blueprint" | "orbital" | "network"

interface HeroAtmosphereProps {
  variant: AtmosphereVariant
  className?: string
}

export function HeroAtmosphere({ variant, className }: HeroAtmosphereProps) {
  return (
    <div className={cn("absolute -top-20 left-0 right-0 -bottom-48 z-0 pointer-events-none", className)}>
      {variant === "converge" && <ConvergeAtmosphere />}
      {variant === "streams" && <StreamsAtmosphere />}
      {variant === "blueprint" && <BlueprintAtmosphere />}
      {variant === "orbital" && <OrbitalAtmosphere />}
      {variant === "network" && <NetworkAtmosphere />}
    </div>
  )
}

function ConvergeAtmosphere() {
  return (
    <>
      {/* Perspective Grid Converging to center-right */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ perspective: "1000px" }}>
        <div 
          className="absolute inset-[-50%] border-dark-700 [background-size:60px_60px] [background-image:linear-gradient(to_right,rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,1)_1px,transparent_1px)]"
          style={{ 
            transform: "rotateX(60deg) translateY(-100px) translateZ(-200px)",
            transformOrigin: "center center"
          }}
        />
      </div>

      <div className="absolute inset-0 bg-dark-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />

      {/* Orange burst from right side (where terminal will be) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[600px] h-[600px] bg-orange-500 rounded-full blur-[120px]"
      />
    </>
  )
}

function StreamsAtmosphere() {
  return (
    <>
      {/* Vertical Data Streams */}
      <div className="absolute inset-0 opacity-10 flex justify-around">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20" />
        ))}
      </div>

      {/* Purple glow behind portrait (left side) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        className="absolute top-1/2 left-[25%] -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[100px]"
      />
    </>
  )
}

function BlueprintAtmosphere() {
  return (
    <>
      {/* Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,1)_1px,transparent_1px)]" />

      {/* Orange Scan Line */}
      <motion.div
        className="absolute top-1/3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
        animate={{ y: [-100, 100, -100], opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Glow behind right side cards (Changed from blue to purple to match brand) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 right-[25%] -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[150px]"
      />
    </>
  )
}

function OrbitalAtmosphere() {
  return (
    <>
      {/* Concentric rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-10">
        {[400, 600, 800, 1000].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white"
            style={{ width: size, height: size }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 - i * 0.2 }}
            transition={{ duration: 2, ease: "easeOut", delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Dual center glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500 rounded-full blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[120px]"
      />
    </>
  )
}

function NetworkAtmosphere() {
  return (
    <>
      {/* Network Nodes Grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="rgba(249,115,22,0.4)" />
              <path d="M50 50 L150 150 M50 50 L-50 150 M50 50 L150 -50 M50 50 L-50 -50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#network-pattern)" />
        </svg>
      </div>

      {/* Orange active glow center-right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-[25%] -translate-y-1/2 w-[400px] h-[400px] bg-orange-500 rounded-full blur-[120px]"
      />
    </>
  )
}
