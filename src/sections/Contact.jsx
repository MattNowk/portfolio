import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import Section from '../components/Section.jsx'
import { PROFILE } from '../data/profile.js'
import './Contact.css'

// Le site est statique (GitHub Pages) : pas de formulaire, mais un lien mailto:
// qui ouvre la messagerie du visiteur (Outlook, Mail…) avec l'adresse et l'objet préremplis.
const MAIL_SUBJECT = 'Prise de contact depuis votre portfolio'
const MAILTO_URL = `mailto:${PROFILE.email}?subject=${encodeURIComponent(MAIL_SUBJECT)}`
const COPIED_DURATION_MS = 2000

function Contact() {
  const [isCopied, setIsCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), COPIED_DURATION_MS)
    } catch {
      // Presse-papiers indisponible : l'adresse reste visible et sélectionnable.
    }
  }

  return (
    <Section id="contact" title="Contactez-moi">
      <p className="contact__intro">
        Une question, une opportunité ou simplement envie d’échanger ? Écrivez-moi, je réponds
        rapidement.
      </p>

      <div className="contact__card">
        <Mail className="contact__icon" aria-hidden="true" />
        <a className="contact__email" href={MAILTO_URL}>
          {PROFILE.email}
        </a>

        <div className="contact__actions">
          <a className="button" href={MAILTO_URL}>
            <Mail aria-hidden="true" />
            M’écrire un e-mail
          </a>
          <button type="button" className="button button--outline" onClick={copyEmail}>
            {isCopied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            {isCopied ? 'Adresse copiée' : 'Copier l’adresse'}
          </button>
          <a
            className="button button--outline"
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin aria-hidden="true" />
            LinkedIn
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
        </div>

        <p className="sr-only" aria-live="polite">
          {isCopied ? 'Adresse e-mail copiée dans le presse-papiers.' : ''}
        </p>
      </div>
    </Section>
  )
}

export default Contact
