import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import CvLink from './CvLink.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { PROFILE } from '../data/profile.js'
import { SECTIONS } from '../data/sections.js'
import './Header.css'

function Header({ activeId }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#accueil" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-label">Portfolio</span>
          {PROFILE.fullName}
        </a>

        <nav
          id="main-nav"
          className={`header__nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Navigation principale"
        >
          <ul className="header__links">
            {SECTIONS.map(({ id, label }) => {
              const isActive = id === activeId
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`header__link ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="header__actions">
          <CvLink className="button button--small header__cv" aria-label="Voir mon CV (nouvel onglet)">
            <span className="header__cv-label">CV</span>
          </CvLink>
          <ThemeToggle />
          <button
            type="button"
            className="icon-button header__burger"
            aria-expanded={isMenuOpen}
            aria-controls="main-nav"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
