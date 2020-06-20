import React, { createContext, useCallback, useContext } from 'react'
import { State } from './state'

const AuthContext = createContext<State>({} as State)

const AuthProvider: React.FC = ({ children }) => {
  const login = useCallback(async ({ email, password }) => {
    console.log(email, password)
  }, [])

  return (
    <AuthContext.Provider value={{ name: '', login }}>
      {children}
    </AuthContext.Provider>
  )
}
function useAuth(): State {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('must be use withn contextProvider')
  }
  return context
}
export { AuthProvider, useAuth }
