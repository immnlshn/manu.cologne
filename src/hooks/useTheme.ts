import { useEffect, useMemo, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

type UseTheme = {
  theme: Theme
  effectiveTheme: 'light' | 'dark'
  setTheme: (t: Theme) => void
  toggleTheme: () => void
}

const THEME_KEY = 'theme'

function getSystemPrefersDark() {
  return globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

function applyThemeClass(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
}

export function useTheme(initial?: Theme): UseTheme {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return initial ?? 'system'
    const stored = localStorage.getItem(THEME_KEY) as Theme | null
    return stored ?? initial ?? 'system'
  })

  const effectiveTheme = useMemo<'light' | 'dark'>(() => {
    if (theme === 'system') return getSystemPrefersDark() ? 'dark' : 'light'
    return theme
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (theme === 'system') {
      localStorage.removeItem(THEME_KEY)
    } else {
      localStorage.setItem(THEME_KEY, theme)
    }
    applyThemeClass(effectiveTheme === 'dark')
  }, [theme, effectiveTheme])

  useEffect(() => {
    if (theme !== 'system') return
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyThemeClass(mql.matches)
    mql.addEventListener?.('change', onChange)
    return () => mql.removeEventListener?.('change', onChange)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, effectiveTheme, setTheme, toggleTheme }
}
