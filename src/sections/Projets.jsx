import { CalendarDays, User, Users } from 'lucide-react'
import CaseStudy from '../components/CaseStudy.jsx'
import Section from '../components/Section.jsx'
import { CRAZY, GAMELAB, GAMETEST } from '../data/caseStudies.js'
import { PROJECTS } from '../data/projects.js'
import './Projets.css'

function ProjectCard({ name, period, type, Icon, workMode, description, tags }) {
  const WorkModeIcon = workMode === 'En équipe' ? Users : User

  return (
    <article className="project">
      <header className="project__header">
        <span className="project__icon">
          <Icon aria-hidden="true" />
        </span>
        <div>
          <h3 className="project__name">{name}</h3>
          <p className="project__type">{type}</p>
        </div>
      </header>

      <ul className="project__meta">
        <li>
          <CalendarDays aria-hidden="true" />
          {period}
        </li>
        <li>
          <WorkModeIcon aria-hidden="true" />
          {workMode}
        </li>
      </ul>

      <p className="project__description">{description}</p>

      <ul className="project__tags" aria-label="Technologies et méthodes">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}

function Projets() {
  return (
    <Section id="projets" title="Mes projets">
      <p className="projets__intro">
        Des projets réalisés en entreprise, de la conception à la mise en production.
      </p>
      <div className="projets__grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={`${project.name}-${project.period}`} {...project} />
        ))}
      </div>

      {[CRAZY, GAMETEST, GAMELAB].map((project) => (
        <CaseStudy key={project.id} project={project} />
      ))}
    </Section>
  )
}

export default Projets
