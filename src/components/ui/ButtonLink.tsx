import type { ReactNode } from 'react'
import { motion } from 'motion/react'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  leftIcon?: ReactNode
  external?: boolean
}

export function ButtonLink({ href, children, variant = 'primary', leftIcon, external }: Readonly<ButtonLinkProps>) {
  const base = 'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2'
  const variants = {
    primary: 'bg-cyan-600 text-white shadow-sm hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400',
    outline: 'border border-zinc-300 text-zinc-800 hover:bg-zinc-50 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:border-zinc-600',
  } as const
  return (
    <motion.a
      href={href}
      className={`${base} ${variants[variant]}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {leftIcon}
      {children}
    </motion.a>
  )
}

