import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: "default" | "outline" | "orange" | "purple"
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-dark-800 text-neutral-300": variant === "default",
          "border border-dark-700 text-neutral-400": variant === "outline",
          "bg-orange-500/10 text-orange-400 border border-orange-500/20": variant === "orange",
          "bg-purple-500/10 text-purple-400 border border-purple-500/20": variant === "purple",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
