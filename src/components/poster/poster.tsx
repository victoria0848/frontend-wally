import type { Genre } from '../../types/movieType'
import styles from './poster.module.scss'
import { Button } from '../button/button'

interface PosterProps {
  id: number
  imageUrl: string
  title: string
  description?: string
  price?: number
  genres?: Genre[]

  variant?: 'home' | 'grid'
}

export function Poster({ id, imageUrl, title, genres, price }: PosterProps) {
  return (
    <div key={id} className={styles.posterStyle}>
      {/* Billede til venstre */}
      <img src={imageUrl} alt={title} className={styles.posterImage} />

      {/* Tekst + info */}
      <div className={styles.posterContent}>
        <h4>{title}</h4>

        <div className={styles.genres}>
          {genres.map((genre) => (
            <span key={genre.id}>{genre.title}</span>
          ))}
          {price && <p>Pris: {price} kr.</p>}
        </div>

        {/* Knap */}
        <div className={styles.buttonWrapper}>
          <Button text="Læs mere" onClick={() => console.log('Poster id:', id)} />
        </div>
      </div>
    </div>
  )
}
