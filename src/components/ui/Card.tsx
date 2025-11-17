import type { ReactNode } from 'react'
import { motion } from 'motion/react'

export function Card({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="rounded-2xl border border-zinc-200/70 bg-white/60 p-5 shadow-sm backdrop-blur transition-shadow hover:shadow-md dark:border-zinc-800/70 dark:bg-zinc-900/60"
    >
      {children}
    </motion.div>
  )
}
