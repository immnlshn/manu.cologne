import { Github, Linkedin } from 'lucide-react'
import { hero, contact } from '../content'

export function Footer() {
  const github = contact.socials.find((s) => s.kind === 'github')
  const linkedin = contact.socials.find((s) => s.kind === 'linkedin')

  return (
    <footer className="relative container pb-12 pt-10">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" aria-hidden="true" />
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row">
        <span>© {new Date().getFullYear()} {hero.name}</span>
        <div className="flex items-center gap-4">
          {github && (
            <a href={github.href} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              <Github className="h-4 w-4" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin.href} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              <Linkedin className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
