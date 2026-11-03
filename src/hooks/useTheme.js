import { useCallback, useEffect, useState } from 'react'

const THEME_STORAGE_KEY = 'theme'
const DARK = 'dark'
const LIGHT = 'light'

function readStoredTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === LIGHT ? LIGHT : DARK
  } catch {
    return DARK
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Stockage indisponible (navigation privée…) : le thème ne sera simplement pas mémorisé.
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(readStoredTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    storeTheme(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === DARK ? LIGHT : DARK))
  }, [])

  return { isDark: theme === DARK, toggleTheme }
}
