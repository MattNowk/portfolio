// Fait défiler jusqu'au début d'une section.
// Le décalage du header est géré en CSS par `scroll-margin-top`,
// la fluidité par `scroll-behavior` (désactivée si l'utilisateur réduit les animations).
export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ block: 'start' })
}
