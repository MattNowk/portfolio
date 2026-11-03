import { Clapperboard, ExternalLink, Music, Tv } from 'lucide-react'
import Card from './Card.jsx'
import CoverImage from './CoverImage.jsx'
import { FAVORITE_ARTISTS, FAVORITE_MOVIES, FAVORITE_SERIES } from '../data/culture.js'
import './FavoriteCulture.css'

const songSearchUrl = (artist, song) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${artist} ${song}`)}`

function CardTitle({ Icon, children }) {
  return (
    <span className="culture__card-title">
      <Icon aria-hidden="true" />
      {children}
    </span>
  )
}

// Classement avec affiches ; une entrée peut regrouper plusieurs affiches.
function PosterRanking({ items }) {
  return (
    <ol className="culture__posters">
      {items.map(({ title, covers }, index) => (
        <li
          key={title}
          className="culture__poster"
          style={{ '--covers': Math.max(covers.length, 1) }}
        >
          <span className="culture__rank" aria-label={`Numéro ${index + 1}`}>
            {index + 1}
          </span>
          <div className="culture__poster-covers">
            {covers.length > 0 ? (
              covers.map((src) => <CoverImage key={src} src={src} title={title} />)
            ) : (
              <CoverImage title={title} />
            )}
          </div>
          <p className="culture__poster-title">{title}</p>
        </li>
      ))}
    </ol>
  )
}

// Artistes, films et séries préférés.
function FavoriteCulture() {
  return (
    <div className="culture">
      <h3 className="culture__title">Mes coups de cœur</h3>

      <div className="culture__cards">
        <Card title={<CardTitle Icon={Music}>Artistes</CardTitle>}>
          <ul className="culture__artists">
            {FAVORITE_ARTISTS.map(({ artist, song, songUrl }) => (
              <li key={artist}>
                <strong>{artist}</strong>
                <a href={songUrl ?? songSearchUrl(artist, song)} target="_blank" rel="noopener noreferrer">
                  {song}
                  <ExternalLink aria-hidden="true" />
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
            ))}
          </ul>
        </Card>

        <Card title={<CardTitle Icon={Clapperboard}>Top 3 films</CardTitle>}>
          <PosterRanking items={FAVORITE_MOVIES} />
        </Card>

        <Card title={<CardTitle Icon={Tv}>Top 5 séries</CardTitle>}>
          <PosterRanking items={FAVORITE_SERIES} />
        </Card>
      </div>
    </div>
  )
}

export default FavoriteCulture
