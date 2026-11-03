import { ArrowUp } from 'lucide-react'
import { scrollToSection } from '../utils/scroll.js'
import './SectionTopButton.css'

// Ramène au début de la section en cours (pas en haut de la page).
function SectionTopButton({ section, isVisible }) {
  const label = `Revenir au début de la section « ${section.label} »`

  return (
    <button
      type="button"
      className={`icon-button section-top ${isVisible ? 'is-visible' : ''}`}
      aria-label={label}
      title={label}
      onClick={() => scrollToSection(section.id)}
    >
      <ArrowUp aria-hidden="true" />
    </button>
  )
}

export default SectionTopButton
