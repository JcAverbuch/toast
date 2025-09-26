import * as React from "react"

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "secondary" | "outline"
}

export function Badge({ variant = "secondary", className = "", ...props }: Props) {
  const base = "inline-grid place-items-center rounded-full px-2.5 py-1 text-sm font-medium leading-tight text-center"
  const variants = {
    secondary: "bg-slate-100 text-slate-800 border border-slate-200",
    outline: "bg-transparent text-slate-800 border border-slate-200",
  }
  return <span className={`${base} ${variants[variant]} ${className}`} {...props} />
}
