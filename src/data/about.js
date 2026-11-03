import {
  BookOpen,
  Clapperboard,
  Dumbbell,
  Gamepad2,
  Music,
  Plane,
  UtensilsCrossed,
} from 'lucide-react'

// Contenu de la section « À propos de moi ».

export const BIO = [
  'Je m’appelle Matthieu Nowak, j’ai 24 ans. Diplômé d’un Bac +5 Architecte Web, je cumule trois années d’expérience en alternance, durant lesquelles j’ai conçu, développé et maintenu des sites et applications web.',
  'Autonome, curieux et à l’aise en équipe, je cherche avant tout un environnement qui favorise la bienveillance, la cohésion d’équipe et la montée en compétences.',
]

export const HARD_SKILLS = [
  { category: 'Langages', items: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
  { category: 'Frameworks et CMS', items: ['React', 'Symfony', 'WordPress'] },
  { category: 'Bases de données', items: ['MySQL', 'MariaDB', 'pgAdmin'] },
  { category: 'Mobile', items: ['Dart', 'Flutter', 'React Native'] },
  { category: 'DevOps et outils', items: ['Git', 'CI/CD', 'Docker', 'Vite', 'Figma'] },
  { category: 'Intelligence artificielle', items: ['Maîtrise des outils d’IA'] },
  { category: 'Connaissances métier', items: ['Processus de recrutement'] },
  { category: 'Autres', items: ['API REST', 'WinDev', 'WebDev'] },
]

export const SOFT_SKILLS = [
  'Autonomie',
  'Force de proposition',
  'Curiosité',
  'Capacité d’adaptation',
  'Esprit critique',
  'Esprit d’équipe',
]

export const LANGUAGES = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Niveau intermédiaire' },
]

export const INTERESTS = [
  { label: 'Musique', Icon: Music },
  { label: 'Voyage', Icon: Plane },
  { label: 'Jeux vidéo', Icon: Gamepad2 },
  { label: 'Cinéma', Icon: Clapperboard },
  { label: 'Comics', Icon: BookOpen },
  { label: 'Sport', Icon: Dumbbell },
  { label: 'Nourriture', Icon: UtensilsCrossed },
]
