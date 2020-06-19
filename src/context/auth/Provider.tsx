import React, {createContext, useCallback, useContext} from 'react';
import { State } from './state';

export const AuthContext = createContext<State>({} as State)

const AuthState = useContext(AuthContext)

export const Authprovider: React.FC  =({ children })=> {
  const login = useCallback(async ({email, password}) => {
    console.log(email, password);
  }, [])


  return(
    <AuthContext.Provider value={{ name: '', login }}>
      {children}
    </AuthContext.Provider>
  )
}
export default{Authprovider, AuthState}
