import styles from './button.module.scss'

type ButtonProps = {
  text: string
  onClick?: () => void
  variant?: 'default' | 'cta'
}

export function Button({ text, onClick, variant = 'default' }: ButtonProps) {
  const className =
    variant === 'cta'
      ? `${styles.button} ${styles.cta}`
      : styles.button

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}