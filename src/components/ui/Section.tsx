import type { ReactNode } from 'react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

type SectionProps = {
  id: string
  children: ReactNode
}

export function Section({ id, children }: Readonly<SectionProps>) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="container scroll-mt-28 py-16 sm:py-24"
    >
      {children}
    </motion.section>
  )
}

export function SectionHeader({ title, subtitle, label }: Readonly<{ title: string; subtitle?: string; label?: string }>) {
  return (
    <header>
      {label ? (
        <p className="mb-2 font-[family-name:var(--font-mono)] text-xs tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">{label}</p>
      ) : null}
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">{subtitle}</p>
      ) : null}
    </header>
  )
}
