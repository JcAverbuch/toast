import * as React from "react"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "ghost" | "secondary" | "default" | "outline"
}

export function Button({ variant = "ghost", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center text-center rounded-xl px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
  const variants: Record<NonNullable<Props["variant"]>, string> = {
    ghost: "bg-transparent hover:bg-slate-50 text-slate-700",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-900",
    default: "bg-slate-900 hover:bg-slate-800 text-white",
    outline: "bg-transparent border border-slate-200 hover:bg-slate-50 text-slate-900",
  }
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
