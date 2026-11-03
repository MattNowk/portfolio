import './Card.css'

// Carte à bordure fine avec un titre.
function Card({ title, className = '', children }) {
  return (
    <article className={`card ${className}`}>
      <h3 className="card__title">{title}</h3>
      {children}
    </article>
  )
}

export default Card
