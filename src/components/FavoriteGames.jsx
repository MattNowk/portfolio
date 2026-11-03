import { ExternalLink } from 'lucide-react'
import CoverImage from './CoverImage.jsx'
import { FAVORITE_GAMES } from '../data/games.js'
import { PROFILE } from '../data/profile.js'
import './FavoriteGames.css'

const MEDALS = ['gold', 'silver', 'bronze']

const steamCoverUrl = (steamId) =>
  `https://cdn.cloudflare.steamstatic.com/steam/apps/${steamId}/library_600x900.jpg`

function Game({ title, steamId, cover, headingLevel }) {
  const Heading = `h${headingLevel}`

  return (
    <div className="game">
      <CoverImage title={title} src={cover ?? (steamId && steamCoverUrl(steamId))} />
      <Heading className="game__title">{title}</Heading>
    </div>
  )
}

function GameCard({ entry, rank }) {
  const isGroup = Boolean(entry.games)
  const medal = MEDALS[rank - 1]
  const modifiers = [
    medal && `game-card--medal game-card--${medal}`,
    isGroup && `game-card--group game-card--${entry.theme} game-card--span-${entry.games.length}`,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <li className={`game-card ${modifiers}`}>
      <span className="game-card__rank" aria-label={`Numéro ${rank}`}>
        #{rank}
      </span>

      {isGroup ? (
        <>
          <h4 className="game-card__group-title">{entry.title}</h4>
          <div className="game-card__games">
            {entry.games.map((game) => (
              <Game key={game.title} {...game} headingLevel={5} />
            ))}
          </div>
        </>
      ) : (
        <Game {...entry} headingLevel={4} />
      )}
    </li>
  )
}

// Top 25 des jeux préférés, affiché dans la section « À propos de moi ».
function FavoriteGames() {
  return (
    <div className="favorite-games">
      <h3 className="favorite-games__title">Mes jeux préférés</h3>
      <p className="favorite-games__intro">Mon top 25.</p>
      <ol className="favorite-games__grid">
        {FAVORITE_GAMES.map((entry, index) => (
          <GameCard key={entry.title} entry={entry} rank={index + 1} />
        ))}
      </ol>
      <a
        className="button button--outline favorite-games__more"
        href={PROFILE.links.backloggd}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tous mes jeux sur Backloggd
        <ExternalLink aria-hidden="true" />
        <span className="sr-only"> (nouvel onglet)</span>
      </a>
    </div>
  )
}

export default FavoriteGames
