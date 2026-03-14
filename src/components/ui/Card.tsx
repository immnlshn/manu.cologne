import type { ReactNode } from 'react'
import { motion } from 'motion/react'

export function Card({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <motion.div
      whileHover={{ scale: 1.015, y: -3 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="rounded-2xl border border-zinc-200/70 bg-white/60 p-5 shadow-sm backdrop-blur transition-[shadow,border-color] duration-200 hover:shadow-md hover:border-cyan-500/40 dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:hover:border-cyan-400/30"
    >
      {children}
    </motion.div>
  )
}
