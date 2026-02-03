import styles from './about.module.scss'
import aboutImage from '../../assets/images/curtain.jpg' // skift evt. billede
import { Title } from '../../components/title/title'

export function About() {
  return (
    <section className={styles.aboutPage}>
      <Title text="Om os" />

      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Wallywood er en passioneret plakatbutik med fokus på film,
            kunst og visuel storytelling. Vi udvælger nøje vores plakater
            for at sikre høj kvalitet og unikke motiver.
          </p>

          <p>
            Vores mission er at bringe filmoplevelsen ind i dit hjem 
            uanset om du er til klassikere, kultfilm eller moderne favoritter.
          </p>
        </div>

        <img
          src={aboutImage}
          alt="Om Wallywood"
          className={styles.image}
        />
      </div>
    </section>
  )
}