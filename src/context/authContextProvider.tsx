import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

interface User {
  firstname: string
  lastname: string
}

interface UserData {
  user: User
  token?: string
}

interface AuthContextProps {
  userData: UserData | null
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<{ user: User } | null>(null)

  const logout = () => {
    setUserData(null)
    console.log('User logged out')
  }

  return (
    <AuthContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </AuthContext.Provider>
  )
}