import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import './ImageGallery.css'

// Galerie de captures : un clic ouvre l'image en grand (flèches et Échap au clavier).
function ImageGallery({ images }) {
  const dialogRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(0)
  const current = images[openIndex]

  const open = (index) => {
    setOpenIndex(index)
    dialogRef.current?.showModal()
  }

  const close = () => dialogRef.current?.close()

  const move = (step) => setOpenIndex((index) => (index + step + images.length) % images.length)

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') move(1)
    if (event.key === 'ArrowLeft') move(-1)
  }

  return (
    <>
      <ul className="gallery">
        {images.map(({ src, caption }, index) => (
          <li key={src}>
            <button type="button" className="gallery__item" onClick={() => open(index)}>
              <img src={src} alt="" loading="lazy" />
              <span className="gallery__caption">{caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Clic sur le fond sombre (le <dialog> lui-même) : fermeture */}
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={current.caption}
        onKeyDown={handleKeyDown}
        onClick={(event) => event.target === dialogRef.current && close()}
      >
        <figure className="lightbox__figure">
          <img src={current.src} alt={current.caption} />
          <figcaption>
            {current.caption} ({openIndex + 1}/{images.length})
          </figcaption>
        </figure>
        <button type="button" className="icon-button lightbox__close" aria-label="Fermer" onClick={close}>
          <X aria-hidden="true" />
        </button>
        <button type="button" className="icon-button lightbox__prev" aria-label="Image précédente" onClick={() => move(-1)}>
          <ChevronLeft aria-hidden="true" />
        </button>
        <button type="button" className="icon-button lightbox__next" aria-label="Image suivante" onClick={() => move(1)}>
          <ChevronRight aria-hidden="true" />
        </button>
      </dialog>
    </>
  )
}

export default ImageGallery
