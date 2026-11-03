import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.js'
import './ThemeToggle.css'

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      aria-label={isDark ? 'Passer au thème clair' : 'Passer au thème sombre'}
      onClick={toggleTheme}
    >
      <Moon className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true" />
      <Sun className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true" />
    </button>
  )
}

export default ThemeToggle
