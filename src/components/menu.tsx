import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ThemeToggle } from './ThemeToggle'
import { useActiveSection } from '../hooks/useActiveSection'

const ease = [0.22, 1, 0.36, 1] as const

const items = [
  { href: '#about',    label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills',   label: 'Skills' },
  { href: '#cv',       label: 'CV' },
  { href: '#contact',  label: 'Contact' },
] as const

export function Menu() {
  const ids = ['home', 'about', 'projects', 'skills', 'cv', 'contact']
  const active = useActiveSection(ids, 96)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = () => setMobileOpen(false)

  return (
    <>
      <nav aria-label="Primary" className="fixed inset-x-0 top-0 z-50">
        <div className="container py-4">
          <div
            className="flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500"
            style={{
              backgroundColor: scrolled
                ? 'color-mix(in srgb, var(--surface) 85%, transparent)'
                : 'color-mix(in srgb, var(--surface) 55%, transparent)',
              border: '1px solid var(--border)',
              backdropFilter: 'blur(16px) saturate(180%)',
              WebkitBackdropFilter: 'blur(16px) saturate(180%)',
              boxShadow: scrolled
                ? '0 4px 32px color-mix(in srgb, var(--text) 8%, transparent)'
                : 'none',
            }}
          >
            {/* Logo — avatar */}
            <a
              href="#home"
              aria-label="Back to top"
              className="shrink-0"
            >
              <div
                className="overflow-hidden rounded-full"
                style={{
                  width: '2rem',
                  height: '2rem',
                  border: '1.5px solid var(--border-2)',
                }}
              >
                <img
                  src={new URL('../assets/logo.png', import.meta.url).toString()}
                  alt="Immanuel Sohn"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </a>

            {/* Desktop links */}
            <ul className="hidden sm:flex items-center gap-1" role="list">
              {items.map(({ href, label }) => {
                const isActive = active === href.replace('#', '')
                return (
                  <li key={href}>
                    <a
                      href={href}
                      aria-current={isActive ? 'page' : undefined}
                      className="relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 block"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: isActive ? 'var(--lavender)' : 'var(--text-2)',
                      }}
                      onMouseEnter={e => {
                        if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text)'
                      }}
                      onMouseLeave={e => {
                        if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-2)'
                      }}
                    >
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-3 -bottom-0.5 h-px"
                          style={{ backgroundColor: 'var(--lavender)' }}
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              {/* Hamburger — mobile only */}
              <button
                type="button"
                aria-expanded={mobileOpen}
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className="sm:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
              >
                <span
                  className="h-px w-full transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--text)',
                    transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
                  }}
                />
                <span
                  className="h-px w-5 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--text)',
                    opacity: mobileOpen ? 0 : 1,
                  }}
                />
                <span
                  className="h-px w-full transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--text)',
                    transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: 'var(--bg)' }}
          >
            {/* Close button */}
            <div className="container py-7 flex justify-end">
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="text-2xl transition-opacity hover:opacity-60"
                style={{ color: 'var(--text-muted)' }}
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <nav className="container flex flex-1 flex-col justify-center gap-2">
              {items.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease }}
                >
                  <a
                    href={href}
                    onClick={close}
                    className="block leading-none py-3 transition-opacity hover:opacity-60"
                    style={{
                      fontFamily: 'var(--font-display)',
                    fontVariationSettings: '"wght" 700',
                    letterSpacing: '-0.03em',
                      fontSize: 'clamp(2.8rem, 8vw, 4.5rem)',
                      color: active === href.replace('#', '') ? 'var(--rose)' : 'var(--text)',
                    }}
                  >
                    {label}
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Bottom social row */}
            <div className="container pb-10 flex items-center gap-6">
              <a
                href="https://github.com/immnlshn"
                target="_blank" rel="noreferrer"
                className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/immanuel-sohn/"
                target="_blank" rel="noreferrer"
                className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

