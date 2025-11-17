import type { ReactNode } from 'react'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  leftIcon?: ReactNode
  external?: boolean
}

export function ButtonLink({ href, children, variant = 'primary', leftIcon, external }: Readonly<ButtonLinkProps>) {
  const base = 'inline-flex items-center gap-2 rounded-md px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2'
  const variants = {
    primary: 'bg-indigo-600 text-white shadow hover:bg-indigo-500',
    outline: 'border border-zinc-300 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900',
  } as const
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {leftIcon}
      {children}
    </a>
  )
}

