import { type SetStateAction } from 'react'
import { useFetch } from '../../hooks/useFetch'
import type { Genre } from '../../types/movieType'
import styles from '../../pages/posters/posters.module.scss'

interface GenreSelectProps {
  setSelectedGenre: React.Dispatch<SetStateAction<string>>
}

export function GenreSelect({ setSelectedGenre }: GenreSelectProps) {
  const { data, isLoading, error } = useFetch<Array<Genre>>(
    'http://localhost:3000/genre',
  )

  if (isLoading) return <p>Loading genres...</p>
  if (error) return <b>Error: {error}</b>

  return (
    <aside className={styles.genreSection}>
      <h4 className={styles.filterTitle}>Filtre</h4>

      <ul className={styles.genreList}>
        {data?.map((item) => (
          <li
            key={item.id}
            onClick={() => setSelectedGenre(item.slug)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  )
}