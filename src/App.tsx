import React from 'react'
import GlobalStyle from './css/styles'
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
     <BrowserRouter>
        <Routes />
     </BrowserRouter>
    </>
  )
}

export default App
