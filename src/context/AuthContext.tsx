import React, {createContext, useCallback} from 'react';
import { Credentials } from './AuthContextInterfaces';

interface AuthContextData {
  name: string;
  login(data: Credentials): void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const Authprovider: React.FC  =({ children })=> {
  const login = useCallback(async ({email, password}) => {
    console.log(email, password);
  }, [])
  return(
    <AuthContext.Provider value={{ name: 'Robson', login }}>
      {children}
    </AuthContext.Provider>
  )
}
export default{Authprovider, AuthContext}