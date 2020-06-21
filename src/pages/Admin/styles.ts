import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, #dbdffc, #f7d4ee);
`
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px)
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 20px 0 20px;
  animation: ${fadeIn} 1s;
  display: flex;
  justify-content: space-between;
`
export const SideLeft = styled.aside`
  width: 150px;
  display: flex;
  flex-direction: column;

  a {
    color: #414f8c;
    font-family: 'Roboto', sans-serif;
    font-size: 0.8em;
    font-weight: 400;
  }

  h2 {
    color: #414f8c;
    margin: 40px 0;
    font-weight: normal;
    text-transform: uppercase;
  }
`
export const SideLeftMenuList = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    svg {
      color: #414f8c;
      margin-right: 10px;
    }
  }
  /* li:not(:first-child) {
    margin-bottom: 10px;
  } */
`
export const Main = styled.main`
  display: flex;
  flex: 1;
  /* width: 100%;
  height: 100vh; */
`
export const SideRight = styled.aside`
  /* width: 100%;
  height: 100vh; */
`
