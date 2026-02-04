import { NavLink } from 'react-router'
import type { Genre } from '../../types/movieType'
import styles from './poster.module.scss'
import { Button } from '../button/button'

interface PosterProps {
  id: number
  imageUrl: string
  title: string
  genres: Array<Genre>
  description?: string
  price?: number
  slug?: string

  variant?: 'home' | 'grid'
}

export function Poster({
  imageUrl,
  title,
  description,
  genres,
  price,
  slug,
  variant = 'grid',
}: PosterProps) {
  return (
    <div
      className={`${styles.poster} ${
        variant === 'home' ? styles.home : styles.grid
      }`}
    >
      <img src={imageUrl} alt={title} />

      <div className={styles.content}>
        <h4>{title}</h4>

        {variant === 'home' && description && (
          <p className={styles.description}>{description}</p>
        )}

        {variant === 'home' && (
          <div className={styles.genres}>
            {genres.map((g) => (
              <span key={g.id}>{g.title} </span>
            ))}
          </div>
        )}

        {variant === 'grid' && price && (
          <p className={styles.price}>{price} kr.</p>
        )}

        {slug && (
  <NavLink to={`/details/${slug}`} className={styles.link}>
    <Button text="Læs mere" />
  </NavLink>
)}
      </div>
    </div>
  )
}
