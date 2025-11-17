import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { effectiveTheme, toggleTheme } = useTheme()
  const isDark = effectiveTheme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      title={`Toggle theme (currently ${effectiveTheme})`}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/60 bg-white/70 text-zinc-700 shadow-sm backdrop-blur transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-zinc-800/60 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:bg-zinc-900/90"
    >
      <Sun className={"h-5 w-5 transition-transform duration-300 " + (isDark ? 'scale-0 rotate-90' : 'scale-100 rotate-0')} aria-hidden="true" />
      <Moon className={"absolute h-5 w-5 transition-transform duration-300 " + (isDark ? 'scale-100 rotate-0' : 'scale-0 -rotate-90')} aria-hidden="true" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
