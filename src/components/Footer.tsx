import { hero } from '../content'

export function Footer() {
  return (
    <footer className="relative container pb-10 pt-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" aria-hidden="true" />
      © {new Date().getFullYear()} {hero.name}. All rights reserved.
    </footer>
  )
}
