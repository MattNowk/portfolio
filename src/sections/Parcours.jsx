import { ArrowDownRight, BriefcaseBusiness, ExternalLink, GraduationCap } from 'lucide-react'
import Section from '../components/Section.jsx'
import { EXPERIENCES, FORMATIONS } from '../data/parcours.js'
import './Parcours.css'

// Lien vers un projet : ancre interne (#…) vers son étude de cas, ou site externe.
function ProjectName({ name, url }) {
  if (!url) return <strong>{name}</strong>

  if (url.startsWith('#')) {
    return (
      <a href={url} className="timeline__project-link">
        {name}
        <ArrowDownRight aria-hidden="true" />
      </a>
    )
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="timeline__project-link">
      {name}
      <ExternalLink aria-hidden="true" />
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  )
}

function TimelineProjects({ label, items }) {
  return (
    <p className="timeline__projects">
      {label} :{' '}
      {items.map(({ name, url, description }, index) => (
        <span key={name}>
          {index > 0 && ', '}
          <ProjectName name={name} url={url} />
          {description && ` (${description})`}
        </span>
      ))}
    </p>
  )
}

function TimelineItem({ title, organization, location, period, details, projects, link }) {
  return (
    <li className="timeline__item">
      <p className="timeline__period">{period}</p>
      <h4 className="timeline__title">{title}</h4>
      <p className="timeline__place">
        {organization} · {location}
      </p>
      {details && (
        <ul className="timeline__details">
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
      {projects && <TimelineProjects {...projects} />}
      {link && (
        <a href={link.href} className="timeline__project-link timeline__link">
          {link.label}
          <ArrowDownRight aria-hidden="true" />
        </a>
      )}
    </li>
  )
}

function Timeline({ title, Icon, items }) {
  return (
    <div>
      <h3 className="parcours__subtitle">
        <Icon aria-hidden="true" />
        {title}
      </h3>
      <ol className="timeline">
        {items.map((item) => (
          <TimelineItem key={`${item.title}-${item.period}`} {...item} />
        ))}
      </ol>
    </div>
  )
}

function Parcours() {
  return (
    <Section id="parcours" title="Expériences professionnelles et formations">
      <div className="parcours__columns">
        <Timeline title="Expériences professionnelles" Icon={BriefcaseBusiness} items={EXPERIENCES} />
        <Timeline title="Formations" Icon={GraduationCap} items={FORMATIONS} />
      </div>
    </Section>
  )
}

export default Parcours
