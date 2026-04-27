import * as React from "react"
import { cn } from "@/lib/utils"

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function GradientText({ className, children, ...props }: GradientTextProps) {
  return (
    <span
      className={cn("text-gradient", className)}
      {...props}
    >
      {children}
    </span>
  )
}
