import type { SetStateAction } from 'react'
import styles from './dropdown.module.scss'

interface DropDownProps {
  setSelectedSort: React.Dispatch<SetStateAction<string>>
}

export function Dropdown({ setSelectedSort }: DropDownProps) {
  return (
    <select
    className={styles.select}
     onChange={(event) => setSelectedSort(event.target.value)}>
      <option defaultValue={'asc'}>Sorter efter</option>
      <option value='asc'>Pris - stigende</option>
      <option value='desc'>Pris - faldende</option>
      <option value='name'>Titel</option>
    </select>
  )
}