import React from 'react'
import GlobalStyle from './css/styles'
import {BrowserRouter} from 'react-router-dom';
import {Authprovider} from './context/auth/Provider';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Authprovider>
      <GlobalStyle />
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
    </Authprovider>
  )
}

export default App
