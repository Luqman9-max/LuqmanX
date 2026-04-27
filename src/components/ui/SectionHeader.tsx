import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  label: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-12",
        align === "center" && "items-center text-center mx-auto",
        className
      )}
      {...props}
    >
      <span className="font-mono text-orange-500 text-sm tracking-widest uppercase">
        // {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-100 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-neutral-400 text-lg max-w-2xl mt-2 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
