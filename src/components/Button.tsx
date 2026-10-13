import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  variant?: 'primary' | 'ghost'
  children: ReactNode
}

const variants = {
  primary: 'bg-electric text-white hover:bg-cyan hover:text-void',
  ghost: 'border border-line text-mist hover:border-cyan hover:text-cyan',
}

export default function Button({
  href,
  variant = 'primary',
  children,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${variants[variant]}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
      >
        →
      </span>
    </a>
  )
}