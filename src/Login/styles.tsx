import styled from 'styled-components'
import BgLogin from '../assets/images/login-side-bg.jpg'

export const Container = styled.div`
  width: 100%;
  display: flex;
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const SideImage = styled.div`
  background-image: url(${BgLogin});
  height: 400px;
  width: 700px;
  background-repeat: no-repeat;
  background-position: center center;
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
