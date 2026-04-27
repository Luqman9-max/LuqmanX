import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
  gradientAccent?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, gradientAccent = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl bg-dark-900 border border-dark-700 p-6 transition-all duration-300",
          hoverable && "hover:border-orange-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/5",
          className
        )}
        {...props}
      >
        {gradientAccent && (
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-purple-500" />
        )}
        <div className="relative z-10">{children}</div>
        
        {hoverable && (
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />
        )}
      </div>
    )
  }
)
Card.displayName = "Card"

export { Card }
