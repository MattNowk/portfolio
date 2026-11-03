import { PROFILE } from '../data/profile.js'
import './Portrait.css'

// Photo de profil ronde. La taille se règle avec la variable CSS --portrait-size.
function Portrait({ className = '', isLazy = false }) {
  return (
    <img
      className={`portrait ${className}`}
      src={PROFILE.photo.url}
      alt={PROFILE.photo.alt}
      width="360"
      height="360"
      loading={isLazy ? 'lazy' : 'eager'}
    />
  )
}

export default Portrait
