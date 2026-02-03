import { useContext, useState } from 'react'
import { Grid } from '../../components/grid/grid'
import { Input } from '../../components/input/input'
// import { Submit } from '../../components/submit/submit'
import { AuthContext } from '../../context/authContext'
import styles from './login.module.scss'
import { Button } from '../../components/button/button'

export function Login() {
  const [error, setError] = useState<string | null>(null)
  const { userData, setUserData } = useContext(AuthContext)

  function postLogin(e: React.SubmitEvent) {
    e.preventDefault()
    // Gem input values
    const userName = e.target.email.value
    const passWord = e.target.password.value

    // Opret body (URLSearchParams)
    const body = new URLSearchParams()

    // append input values til body
    body.append('username', userName)
    body.append('password', passWord)

    const url = 'http://localhost:3000/login'

    // POST body til backend server og håndter response (success/error)
    fetch(url, { method: 'POST', body: body })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data)
        setError(null)
      })
      .catch((error) => {
        console.error('Error logging in: ', error)
        setError('Fejl ved login, prøv igen')
      })
  }

  return (
      <section className={styles.loginSection}>
      <h2 className={styles.title}>Login</h2>

      {userData && (
        <p className={styles.welcome}>
          Velkommen {userData.user.firstname} {userData.user.lastname}
        </p>
      )}
      {error && <p className={styles.error}>{error}</p>}

      <form className={styles.form} onSubmit={postLogin}>
        <Grid gtr={'1fr 1fr 1fr'} gap={8}>
          <Input type='email' name='email' label='Email' />
          <Input type='password' name='password' label='Password' />
          <Input type='text' name='extra' label='Ekstra felt' />
          <Button text='Login' />
        </Grid>
      </form>
    </section>
  )
}