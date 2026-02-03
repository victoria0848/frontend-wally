import styles from './contact.module.scss'
import { Title } from '../../components/title/title'
import { Input } from '../../components/input/input'
import { Button } from '../../components/button/button'

export function Contact() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Form submitted')
  }

  return (
    <section className={styles.contactPage}>
      <Title text="Kontakt os" />

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Navn" type="text" name="navn" />
        <Input label="Email" type="email" name="email" />

        <label className={styles.textAreaLabel}>
          Besked
          <textarea
            name="besked"
            placeholder="Skriv din besked her..."
          />
        </label>

        <div className={styles.buttonWrapper}>
          <Button text="Send" />
        </div>
      </form>
    </section>
  )
}