import portrait from '../assets/photo-de-moi-portrait.jpg'

// Informations personnelles réutilisées à plusieurs endroits du site.
export const PROFILE = {
  firstName: 'Matthieu',
  fullName: 'Matthieu Nowak',
  role: 'Développeur web full stack et bientôt architecte web',
  availability: 'Disponible à partir du 1er décembre 2026',
  photo: {
    url: portrait,
    alt: 'Portrait de Matthieu Nowak',
  },
  email: 'matthieu_nowak@outlook.fr',
  links: {
    linkedin: 'https://www.linkedin.com/in/matthieu-nowak-48b06a204/',
    gitlab: 'https://gitlab.com/Matt_Now',
    github: 'https://github.com/MattNowk',
    backloggd: 'https://backloggd.com/u/MA2T/',
  },
  cv: {
    url: `${import.meta.env.BASE_URL}CV.pdf`,
  },
}
