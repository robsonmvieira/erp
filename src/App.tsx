import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './css/styles'
import Routes from './routes'
import AppProvider from './state'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <AppProvider>
        <Router>
          <Routes />
        </Router>
      </AppProvider>
    </>
  )
}

export default App
