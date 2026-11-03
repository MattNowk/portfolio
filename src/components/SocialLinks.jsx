import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa6'
import { PROFILE } from '../data/profile.js'
import './SocialLinks.css'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', url: PROFILE.links.linkedin, Icon: FaLinkedin },
  { label: 'GitLab', url: PROFILE.links.gitlab, Icon: FaGitlab },
  { label: 'GitHub', url: PROFILE.links.github, Icon: FaGithub },
]

// Boutons vers les profils externes.
function SocialLinks() {
  return (
    <ul className="social-links">
      {SOCIAL_LINKS.map(({ label, url, Icon }) => (
        <li key={label}>
          <a className="social-links__link" href={url} target="_blank" rel="noopener noreferrer">
            <Icon aria-hidden="true" />
            {label}
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
