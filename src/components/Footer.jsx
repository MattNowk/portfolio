import CvLink from './CvLink.jsx'
import { PROFILE } from '../data/profile.js'
import './Footer.css'

const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p>
          © {CURRENT_YEAR} {PROFILE.fullName}. Tous droits réservés.
        </p>
        <CvLink className="footer__cv">Voir mon CV</CvLink>
      </div>
    </footer>
  )
}

export default Footer
