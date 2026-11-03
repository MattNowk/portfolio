import marvelUltimateAlliance from '../assets/games/marvel-ultimate-alliance.jpg'
import marvelsWolverine from '../assets/games/marvels-wolverine.jpg'
import minecraft from '../assets/games/minecraft.jpg'

// Top 25 de mes jeux préférés : l'ordre du tableau donne le classement.
//
// Une entrée est soit un jeu, soit un groupe de jeux partageant la même place :
//   jeu    : { title, steamId?, cover? }
//   groupe : { title, theme, games: [jeu, …] }
//
// - steamId : identifiant Steam, utilisé pour charger la jaquette officielle.
// - cover   : image locale importée depuis src/assets/games (pour les jeux absents de Steam).
//             Sans steamId ni cover, une carte avec le titre s'affiche.
// - theme   : couleur de bordure du groupe (voir FavoriteGames.css).
//
// La grille compte 6 colonnes : un groupe occupe une colonne par jeu.

export const FAVORITE_GAMES = [
  { title: 'The Last of Us Part I', steamId: 1888930 },
  { title: 'Fallout 4', steamId: 377160 },
  { title: 'Marvel: Ultimate Alliance', cover: marvelUltimateAlliance },
  {
    title: "Saga Marvel's Spider-Man",
    theme: 'spider-man',
    games: [
      { title: "Marvel's Spider-Man", steamId: 1817070 },
      { title: "Marvel's Spider-Man: Miles Morales", steamId: 1817190 },
      { title: "Marvel's Spider-Man 2", steamId: 2651280 },
    ],
  },
  { title: 'Dispatch', steamId: 2592160 },
  { title: "Marvel's Wolverine", cover: marvelsWolverine },
  { title: 'Call of Duty: Black Ops II', steamId: 202970 },
  { title: 'The Elder Scrolls V: Skyrim', steamId: 489830 },
  { title: 'Minecraft', cover: minecraft },
  { title: 'Les Sims 4', steamId: 1222670 },
  { title: 'Before Your Eyes', steamId: 1082430 },
  { title: 'The Wolf Among Us', steamId: 250320 },
  { title: 'The Walking Dead (Telltale)', steamId: 1449690 },
  { title: 'Dying Light', steamId: 239140 },
  { title: 'Horizon Zero Dawn', steamId: 1151640 },
  { title: 'As Dusk Falls', steamId: 1341820 },
  { title: 'Red Dead Redemption', steamId: 2668510 },
  {
    title: 'Saga Batman Arkham',
    theme: 'batman',
    games: [
      { title: 'Batman: Arkham Asylum', steamId: 35140 },
      { title: 'Batman: Arkham City', steamId: 200260 },
      { title: 'Batman: Arkham Origins', steamId: 209000 },
      { title: 'Batman: Arkham Knight', steamId: 208650 },
    ],
  },
  { title: 'Clair Obscur: Expedition 33', steamId: 1903340 },
  { title: 'South Park : Le Bâton de la Vérité', steamId: 213670 },
  { title: 'Marvel Rivals', steamId: 2767030 },
  { title: 'God of War (2018)', steamId: 1593500 },
  { title: 'Viewfinder', steamId: 1382070 },
  { title: 'R.E.P.O.', steamId: 3241660 },
  { title: '7 Days to Die', steamId: 251570 },
]
