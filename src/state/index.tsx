import React from 'react'

import { AuthProvider } from './auth/Provider'
import { ToastProvider } from './toast/Provider'

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  )
}

export default AppProvider
