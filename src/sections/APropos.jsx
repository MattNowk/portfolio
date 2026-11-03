import Section from '../components/Section.jsx'
import Portrait from '../components/Portrait.jsx'
import Card from '../components/Card.jsx'
import FavoriteGames from '../components/FavoriteGames.jsx'
import FavoriteCulture from '../components/FavoriteCulture.jsx'
import FoodStory from '../components/FoodStory.jsx'
import { BIO, HARD_SKILLS, INTERESTS, LANGUAGES, SOFT_SKILLS } from '../data/about.js'
import './APropos.css'

function TagList({ items }) {
  return (
    <ul className="about__tags">
      {items.map((item) => (
        <li key={item} className="about__tag">
          {item}
        </li>
      ))}
    </ul>
  )
}

function APropos() {
  return (
    <Section id="a-propos" title="À propos de moi">
      <div className="about__intro">
        <Portrait className="about__photo" isLazy />
        <div className="about__bio">
          {BIO.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="about__cards">
        <Card title="Hard skills" className="about__card--wide">
          <dl className="about__skills">
            {HARD_SKILLS.map(({ category, items }) => (
              <div key={category}>
                <dt>{category}</dt>
                <dd>
                  <TagList items={items} />
                </dd>
              </div>
            ))}
          </dl>
        </Card>

        <Card title="Soft skills">
          <TagList items={SOFT_SKILLS} />
        </Card>

        <Card title="Langues">
          <ul className="about__languages">
            {LANGUAGES.map(({ name, level }) => (
              <li key={name}>
                <strong>{name}</strong>
                <span>{level}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="En dehors du code">
          <ul className="about__interests">
            {INTERESTS.map(({ label, Icon }) => (
              <li key={label}>
                <Icon aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <FavoriteGames />
      <FavoriteCulture />
      <FoodStory />
    </Section>
  )
}

export default APropos
