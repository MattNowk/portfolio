import { useRef, useState } from 'react'
import { PROFILE } from '../data/profile.js'
import fishAndChipsVideo from '../assets/videos/fish-and-chips.mp4'
import './Portrait.css'
import './FoodStory.css'

// Photo ronde qui joue la vidéo d'origine (sans son) :
// au survol à la souris, ou au toucher / clavier sur mobile.
function FoodStory() {
  const videoRef = useRef(null)
  const pointerTypeRef = useRef('')
  const [isPlaying, setIsPlaying] = useState(false)

  const play = () => {
    videoRef.current?.play().catch(() => setIsPlaying(false))
    setIsPlaying(true)
  }

  const stop = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
    setIsPlaying(false)
  }

  const handleClick = () => {
    // À la souris, le survol gère déjà la lecture.
    if (pointerTypeRef.current === 'mouse') return
    if (isPlaying) stop()
    else play()
  }

  return (
    <div className="food-story">
      <button
        type="button"
        className={`portrait food-story__media ${isPlaying ? 'is-playing' : ''}`}
        aria-label="Voir la vidéo du fish and chips"
        aria-pressed={isPlaying}
        onPointerDown={(event) => (pointerTypeRef.current = event.pointerType)}
        onPointerEnter={(event) => {
          pointerTypeRef.current = event.pointerType
          if (event.pointerType === 'mouse') play()
        }}
        onPointerLeave={(event) => event.pointerType === 'mouse' && stop()}
        onClick={handleClick}
      >
        <img src={PROFILE.photo.url} alt="" width="360" height="360" loading="lazy" />
        <video ref={videoRef} src={fishAndChipsVideo} muted loop playsInline preload="metadata" />
      </button>

      <div className="food-story__text">
        <h3 className="food-story__title">Et surtout… la nourriture</h3>
        <p>
          Ma photo de profil a une histoire : elle vient de mon enthousiasme, à Londres, devant un
          fish and chips qui venait d’arriver sur la table. Je crois qu’elle me résume assez bien.
        </p>
        <p className="food-story__hint">
          Passez la souris sur la photo pour voir la scène (sur mobile, touchez-la).
        </p>
      </div>
    </div>
  )
}

export default FoodStory
