import * as React from "react"

type Props = React.HTMLAttributes<HTMLDivElement>

export function Card({ className = "", ...props }: Props) {
  const base = "rounded-2xl border border-slate-200 bg-white/60 shadow-sm backdrop-blur"
  return <div className={`${base} ${className}`} {...props} />
}
