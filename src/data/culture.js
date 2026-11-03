import fromCover from '../assets/covers/from.jpg'
import severanceCover from '../assets/covers/severance.jpg'

// Coups de cœur affichés dans la section « À propos de moi ».

// `songUrl` : lien direct vers le morceau. Par défaut : recherche YouTube « artiste morceau ».

export const FAVORITE_ARTISTS = [
  { artist: 'Woodkid', song: 'Reactor', songUrl: 'https://www.youtube.com/watch?v=q1RnoheRuDg' },
  { artist: 'Poppy', song: 'X' },
  { artist: 'Bershy', song: 'Radio' },
  { artist: 'Twenty One Pilots', song: 'The Line' },
  { artist: 'Post Malone', song: 'Mourning' },
  { artist: 'Asking Alexandria', song: 'Moving On' },
  { artist: 'Radiohead', song: 'Let Down' },
  { artist: 'Yame', song: 'On My Mind' },
  { artist: 'The Dead South', song: 'Broken Cowboy' },
]

// Affiches : hébergées par Wikipédia, ou locales (src/assets/covers) quand Wikipédia n'en a pas.
// `covers` vide : une carte avec le titre s'affiche.
const wikipedia = (path) => `https://upload.wikimedia.org/wikipedia/en/${path}`

export const FAVORITE_MOVIES = [
  {
    title: 'Avengers : Infinity War et Endgame',
    covers: [
      wikipedia('4/4d/Avengers_Infinity_War_poster.jpg'),
      wikipedia('0/0d/Avengers_Endgame_poster.jpg'),
    ],
  },
  { title: 'Parasite', covers: [wikipedia('5/53/Parasite_%282019_film%29.png')] },
  {
    title: 'The Suicide Squad (James Gunn)',
    covers: [wikipedia('0/06/The_Suicide_Squad_%28film%29_poster.jpg')],
  },
]

export const FAVORITE_SERIES = [
  { title: 'Severance', covers: [severanceCover] },
  { title: 'From', covers: [fromCover] },
  { title: 'The Boys', covers: [wikipedia('f/f6/The_Boys_Season_1.jpg')] },
  { title: 'South Park', covers: [wikipedia('4/4d/South_Park_Season_1.jpg')] },
  { title: 'Shameless', covers: [wikipedia('3/34/Shameless_Season_1.jpg')] },
]
