import styled, { keyframes } from 'styled-components'
import BgLogin from '../../assets/images/login-bg.jpg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: stretch;
`
export const Content = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
`

const fade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 700px;
  animation: ${fade} 2s;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 130px;
    margin-bottom: 50px;
    font-size: 2.5em;
    font-weight: 700;
    color: #122232;
    text-transform: uppercase;
  }
`

export const SideImage = styled.div`
  background-image: url(${BgLogin});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex: 1;
`
