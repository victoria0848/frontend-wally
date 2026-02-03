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
}

export const AuthContext = createContext<AuthContextProps | null>(null)

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData | null>(null)

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}