import { useState } from 'react'
import { Poster } from '../../components/poster/poster'
import { Grid } from '../../components/grid/grid'
import { useFetch } from '../../hooks/useFetch'
import type { MovieData } from '../../types/movieType'
import { GenreSelect } from '../../components/genreSelect/genreSelect'
import { Title } from '../../components/title/title'
import { Dropdown } from '../../components/dropdown/dropdown'
import styles from './posters.module.scss'

export function Posters() {
  const [selectedGenre, setSelectedGenre] = useState<string>('komedie')
  const [selectedSort, setSelectedSort] = useState<string>('asc')

  let sort_Key = 'random'
  let sort_Direction = 'asc'

  if (selectedSort === 'name') {
    sort_Key = 'name'
  } else {
    sort_Key = 'random'
  }

  if (selectedSort === 'asc' || selectedSort === 'desc') {
    sort_Key = 'price'
    sort_Direction = selectedSort
  }

  const { data, isLoading, error } = useFetch<Array<MovieData>>(
    `http://localhost:3000/posters/list_by_genre/${selectedGenre}?sort_key=${sort_Key}&sort_direction=${sort_Direction}`,
  )

  if (isLoading) {
    return <h1>Loading data...</h1>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <Title text="Plakater" />
        <Dropdown setSelectedSort={setSelectedSort} />
      </div>

{/* CONTENT */}
<div className={styles.layout}>
  <aside className={styles.genreSidebar}>
    <GenreSelect setSelectedGenre={setSelectedGenre} />
  </aside>

  <section className={styles.posterArea}>
    <div className={styles.posterGrid}>
  {data?.map((item) => (
    <Poster
      key={item.id}
      id={item.id}
      imageUrl={item.image}
      title={item.name}
      genres={item.genres}
      price={item.price}
    />
  ))}
</div>
  </section>
</div>
    </>
  )
}