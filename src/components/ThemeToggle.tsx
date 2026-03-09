import { motion, AnimatePresence } from 'motion/react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { effectiveTheme, toggleTheme } = useTheme()
  const isDark = effectiveTheme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative inline-flex h-8 w-[3.25rem] items-center rounded-full transition-all duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shrink-0"
      style={{
        backgroundColor: isDark
          ? 'color-mix(in srgb, var(--lavender) 25%, var(--surface-2))'
          : 'color-mix(in srgb, var(--peach) 20%, var(--surface-2))',
        border: '1px solid var(--border)',
        focusVisibleRingColor: 'var(--rose)',
      }}
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 40 }}
        className="flex h-6 w-6 items-center justify-center rounded-full shadow-sm"
        style={{
          backgroundColor: isDark ? 'var(--lavender)' : 'var(--peach)',
          margin: isDark ? '0 2px 0 auto' : '0 auto 0 2px',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.22 }}
            className="text-xs"
            aria-hidden
          >
            {isDark ? '☽' : '☀'}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

