import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "outline", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center text-[0.65rem] tracking-[0.2em] font-medium uppercase transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-charcoal disabled:pointer-events-none disabled:opacity-50 h-14 px-10 relative overflow-hidden group",
          variant === "outline" && "border border-brand-charcoal hover:border-brand-charcoal/50 text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-ivory",
          variant === "solid" && "bg-brand-charcoal text-brand-ivory hover:bg-brand-charcoal/80",
          variant === "ghost" && "hover:bg-brand-stone text-brand-charcoal hover:scale-[1.02]",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
