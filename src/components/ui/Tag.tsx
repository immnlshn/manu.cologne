import type { ReactNode } from 'react'

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200/70 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-800/70 dark:text-zinc-300">
      {children}
    </span>
  )
}
