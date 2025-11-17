import { useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { useActiveSection } from '../hooks/useActiveSection'
import {hero} from "../content";

const items = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#cv', label: 'CV' },
  { href: '#contact', label: 'Contact' },
] as const

type LinkItemProps = { href: string; label: string; activeId: string; onClick?: () => void }
function LinkItem({ href, label, activeId, onClick }: Readonly<LinkItemProps>) {
  const isActive = activeId === href.replace('#', '')
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'true' : undefined}
      className={
        'block px-3 py-2 text-sm transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 ' +
        (isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-zinc-600 dark:text-zinc-400')
      }
    >
      {label}
    </a>
  )
}

export function Menu() {
  const ids = ['home', 'about', 'projects', 'skills', 'cv', 'contact']
  const active = useActiveSection(ids, 96)
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav aria-label="Primary" className="fixed inset-x-0 top-4 z-50">
      <div className="container">
        {/* Desktop nav */}
        <div className="mx-auto hidden max-w-3xl items-center justify-between rounded-full border border-zinc-200/70 bg-white/60 px-3 py-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:border-zinc-800/70 dark:bg-zinc-900/60 supports-[backdrop-filter]:dark:bg-zinc-900/40 sm:flex">
          <ul className="flex items-center gap-1 sm:gap-2">
            <div className="mx-auto w-8">
              <img
                  src={new URL('../assets/logo.png', import.meta.url).toString()}
                  alt={hero.name}
                  className="block h-auto w-full"
                  loading="eager"
                  width={384}
                  height={384}
              />
            </div>
            {items.map((it) => (
              <li key={it.href}>
                <LinkItem href={it.href} label={it.label} activeId={active} />
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile nav */}
        <div className="flex items-center justify-between rounded-full border border-zinc-200/70 bg-white/60 px-4 py-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:border-zinc-800/70 dark:bg-zinc-900/60 supports-[backdrop-filter]:dark:bg-zinc-900/40 sm:hidden">
          <div className="flex items-center gap-2">
            <div className="mx-auto w-8">
              <img
                  src={new URL('../assets/logo.png', import.meta.url).toString()}
                  alt={hero.name}
                  className="block h-auto w-full"
                  loading="eager"
                  width={384}
                  height={384}
              />
            </div>
            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Menu</span>
          </div>
          <div className="flex items-center gap-2">

            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="mt-2 rounded-2xl border border-zinc-200/70 bg-white/90 p-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800/70 dark:bg-zinc-900/90 supports-[backdrop-filter]:dark:bg-zinc-900/60 sm:hidden">
            <ul className="space-y-1">
              {items.map((it) => (
                <li key={it.href}>
                  <LinkItem href={it.href} label={it.label} activeId={active} onClick={closeMobile} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
