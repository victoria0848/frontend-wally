import { NavLink } from 'react-router'
import style from './Navbar.module.scss'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContextProvider'

interface NavbarProps {
  logoNav: string
  linksNav: Array<{ name: string; path: string }>
}

export function Navbar(props: NavbarProps) {
  const { logoNav, linksNav } = props

   const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('AuthContext not found')
  }

  const { userData, logout } = authContext
  return (
    <nav className={style.navbarStyle}>
      <h3>{logoNav}</h3>
      <ul>
        {linksNav.map((item) => {
          return item.name === 'login' && userData ? (
            <li key="logout" onClick={logout}>
              LOGOUT
            </li>
          ) : (
            <li key={item.path}>
              <NavLink to={item.path}>{item.name.toUpperCase()}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}