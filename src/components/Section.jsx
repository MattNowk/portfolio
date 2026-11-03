import './Section.css'

// Conteneur commun à toutes les sections du one page.
// `aside` : contenu facultatif affiché à droite (à gauche du texte sur mobile).
function Section({ id, title, headingLevel = 2, className = '', aside, children }) {
  const Heading = `h${headingLevel}`
  const headingId = `${id}-title`

  const content = (
    <>
      <Heading id={headingId} className="section__title">
        {title}
      </Heading>
      {children}
    </>
  )

  return (
    <section id={id} className={`section ${className}`} aria-labelledby={headingId}>
      {aside ? (
        <div className="container section__split">
          <div>{content}</div>
          {aside}
        </div>
      ) : (
        <div className="container">{content}</div>
      )}
    </section>
  )
}

export default Section
