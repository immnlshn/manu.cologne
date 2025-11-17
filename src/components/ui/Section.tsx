import type { ReactNode } from 'react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

type SectionProps = {
  id: string
  children: ReactNode
}

export function Section({ id, children }: SectionProps) {
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

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      ) : null}
    </header>
  )
}
