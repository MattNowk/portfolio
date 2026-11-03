import { FileText } from 'lucide-react'
import ImageGallery from './ImageGallery.jsx'
import './CaseStudy.css'

// Présentation détaillée d'un projet : enjeux, réalisations, captures et documents.
function CaseStudy({ project }) {
  const { id, name, tagline, badges, summary, stakes, features, stack, screenshots, takeaways, documents } =
    project

  return (
    <article id={id} className="case-study">
      <header className="case-study__header">
        <ul className="case-study__badges">
          {badges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
        <h3 className="case-study__name">{name}</h3>
        <p className="case-study__tagline">{tagline}</p>
        <p className="case-study__summary">{summary}</p>
      </header>

      <section className="case-study__block">
        <h4 className="case-study__subtitle">Les enjeux</h4>
        <ul className="case-study__stakes">
          {stakes.map(({ title, text }) => (
            <li key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="case-study__block">
        <h4 className="case-study__subtitle">Ce que j’ai réalisé</h4>
        <dl className="case-study__features">
          {features.map(({ title, text }) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
        <ul className="case-study__stack" aria-label="Technologies et outils">
          {stack.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="case-study__block">
        <h4 className="case-study__subtitle">En images</h4>
        <ImageGallery images={screenshots} />
      </section>

      <section className="case-study__block">
        <h4 className="case-study__subtitle">Ce que j’en retiens</h4>
        <p className="case-study__takeaways">{takeaways}</p>
        <div className="case-study__documents">
          {documents.map(({ label, detail, url }) => (
            <a key={label} className="button button--outline" href={url} target="_blank" rel="noopener noreferrer">
              <FileText aria-hidden="true" />
              {label}
              <span className="case-study__document-detail">{detail}</span>
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          ))}
        </div>
      </section>
    </article>
  )
}

export default CaseStudy
