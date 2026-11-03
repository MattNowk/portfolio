import Section from '../components/Section.jsx'
import CvLink from '../components/CvLink.jsx'
import Portrait from '../components/Portrait.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { PROFILE } from '../data/profile.js'
import './Accueil.css'

function Accueil() {
  return (
    <Section
      id="accueil"
      title={`Bonjour, je suis ${PROFILE.firstName}`}
      headingLevel={1}
      className="accueil"
      aside={<Portrait className="accueil__photo" />}
    >
      <p className="accueil__role">{PROFILE.role}</p>
      <p className="accueil__intro">
        Diplômé d’un Bac +4 Concepteur Développeur d’Applications, je passe le 23 novembre 2026
        l’examen du Mastère Architecte Web (Bac +5). Je conçois et développe des applications web
        de la maquette à la mise en ligne, avec Symfony et React. Trois années d’alternance m’ont appris
        à livrer des projets concrets, en équipe et en méthode agile.
      </p>
      <p className="accueil__intro">
        Ce portfolio, je l’ai aussi voulu humain : au-delà de mon parcours et de mes projets, j’y
        parle de mes passions (jeux vidéo, musique, cinéma, séries… et nourriture). Il est
        interactif : survolez, cliquez, explorez !
      </p>
      <p className="accueil__availability">{PROFILE.availability}</p>

      <div className="accueil__actions">
        <CvLink className="button">Voir mon CV</CvLink>
        <a href="#projets" className="button button--outline">
          Voir mes projets
        </a>
        <a href="#contact" className="button button--outline">
          Me contacter
        </a>
      </div>

      <div className="accueil__social">
        <SocialLinks />
      </div>
    </Section>
  )
}

export default Accueil
