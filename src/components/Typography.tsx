import * as React from "react"
import { cn } from "@/lib/utils"

export function SectionHeading({ 
  children, 
  className 
}: { 
  children: React.ReactNode, 
  className?: string 
}) {
  return (
    <h2 className={cn("font-serif text-[clamp(2.5rem,4vw,3.5rem)] md:text-[clamp(3.5rem,6vw,5rem)] font-light text-brand-charcoal text-balance leading-tight", className)}>
      {children}
    </h2>
  )
}

export function TextPairing({
  label,
  heading,
  body,
  className
}: {
  label?: string
  heading?: React.ReactNode
  body?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {label && <span className="text-brand-sage uppercase tracking-[0.2em] text-xs font-semibold opacity-80">{label}</span>}
      {heading && <div className="mb-2">{heading}</div>}
      {body && <div className="text-brand-charcoal/70 leading-relaxed text-sm md:text-base max-w-prose font-light">{body}</div>}
    </div>
  )
}
