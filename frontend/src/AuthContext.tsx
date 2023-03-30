import React, { createContext, useContext, useState } from 'react'

interface AuthContextValue {
  isLoggedIn: boolean
  setLoggedIn: (loggedIn: boolean) => void
}

export const AuthContext = createContext<AuthContextValue>({
  isLoggedIn: false,
  setLoggedIn: () => {},
})

export const useAuth = () => {
  return useContext(AuthContext)
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}
