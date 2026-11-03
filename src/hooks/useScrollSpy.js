import { useEffect, useState } from 'react'

// Une section devient active quand son début passe au-dessus du milieu de l'écran.
const ACTIVATION_RATIO = 0.5
// Le bouton de retour apparaît après avoir parcouru cette part d'écran dans la section.
const RETURN_BUTTON_RATIO = 0.2

const clamp = (value) => Math.min(Math.max(value, 0), 1)

function measure(ids) {
  const { scrollY, innerHeight } = window
  const maxScroll = document.documentElement.scrollHeight - innerHeight

  // Position de défilement pour laquelle chaque section arrive juste sous le header.
  const starts = ids.map((id) => {
    const element = document.getElementById(id)
    if (!element) return 0
    const offset = parseFloat(getComputedStyle(element).scrollMarginTop) || 0
    return element.getBoundingClientRect().top + scrollY - offset
  })

  const isAtBottom = scrollY >= maxScroll - 1
  const activationLine = scrollY + innerHeight * ACTIVATION_RATIO
  const activeIndex = isAtBottom
    ? ids.length - 1
    : Math.max(starts.findLastIndex((start) => start <= activationLine), 0)

  return {
    activeIndex,
    progress: maxScroll > 0 ? clamp(scrollY / maxScroll) : 0,
    markers: starts.map((start) => (maxScroll > 0 ? clamp(start / maxScroll) : 0)),
    isDeepInSection: scrollY - starts[activeIndex] > innerHeight * RETURN_BUTTON_RATIO,
  }
}

// Suit le défilement : section active, progression globale (0 à 1),
// position de chaque section sur la barre de progression (0 à 1).
export function useScrollSpy(ids) {
  const [state, setState] = useState({
    activeIndex: 0,
    progress: 0,
    markers: ids.map(() => 0),
    isDeepInSection: false,
  })

  useEffect(() => {
    let frame = 0

    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setState(measure(ids)))
    }

    const resizeObserver = new ResizeObserver(update)
    resizeObserver.observe(document.body)
    window.addEventListener('scroll', update, { passive: true })
    update()

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', update)
    }
  }, [ids])

  return state
}
