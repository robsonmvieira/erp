import styled, { keyframes } from 'styled-components'
import { Form as Unform } from '@unform/web'

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
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
  padding: 0 20px;
  margin: 0 auto;
  animation: ${fadeIn} 1s;
`
export const MyForm = styled(Unform)`
  display: flex;
  width: 100%;
  justify-content: center;

  & .form-upload {
    width: 600px;
    display: flex;
    align-items: center;
    background: #26c870;

    .container-img {
      width: 100%;
      height: 100vh;

      img {
        width: 100%;
        max-width: 100%;
      }
    }

    div {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      justify-items: center;
      color: #fff;

      svg {
        margin-bottom: 10px;
      }
    }
  }

  & .container-inputs {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-left: 10px;

    & h1 {
      margin-top: 40px;
      margin-bottom: 40px;
      color: #122232;
    }

    & .input-container {
      width: 100%;
      display: flex;
      flex-direction: column;

      label {
        font-family: 'Roboto';
        font-size: 0.7em;
        font-weight: normal;
        margin-bottom: 10px;
        color: #122232;
      }
    }

    & .form-group {
      width: 100%;
      display: flex;
      justify-content: flex-start;

      & .input-container:first-of-type {
        margin-right: 10px;
      }
    }
    & button {
      background: #122232;
      color: #fff;
      border: none;
      width: 200px;
      padding: 10px 15px;
      border-radius: 5px;
    }
  }
`
