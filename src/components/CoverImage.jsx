import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import './CoverImage.css'

// Jaquette / affiche au format 2:3. Sans image (ou si elle ne charge pas),
// une carte avec le titre la remplace.
function CoverImage({ src, title }) {
  const [hasFailed, setHasFailed] = useState(false)
  const label = `Couverture de ${title}`

  if (!src || hasFailed) {
    return (
      <div className="cover cover--fallback" role="img" aria-label={label}>
        <ImageOff aria-hidden="true" />
        <span aria-hidden="true">{title}</span>
      </div>
    )
  }

  return (
    <img
      className="cover"
      src={src}
      alt={label}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setHasFailed(true)}
    />
  )
}

export default CoverImage
