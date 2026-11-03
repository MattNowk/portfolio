import { SECTIONS } from '../data/sections.js'
import './ScrollRail.css'

// Barre de progression verticale avec un repère cliquable par section.
function ScrollRail({ activeIndex, progress, markers }) {
  return (
    <nav className="scroll-rail" aria-label="Progression dans la page">
      <div className="scroll-rail__track">
        <div className="scroll-rail__fill" style={{ transform: `scaleY(${progress})` }} />
      </div>

      <ol className="scroll-rail__markers">
        {SECTIONS.map(({ id, label, Icon }, index) => {
          const isActive = index === activeIndex
          const isReached = index <= activeIndex
          return (
            <li key={id} className="scroll-rail__item" style={{ '--position': markers[index] }}>
              <a
                href={`#${id}`}
                className={`scroll-rail__marker ${isReached ? 'is-reached' : ''} ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                <Icon aria-hidden="true" />
                <span className="scroll-rail__label">{label}</span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default ScrollRail
