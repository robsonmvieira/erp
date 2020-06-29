import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
`

export const Content = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: 40px;

  display: flex;
  justify-content: space-between;

  & .box-desligamento {
    background: rgba(193, 66, 63, 0.9);
    justify-content: flex-start;
  }

  & .colorWhite {
    color: #fff;
  }

  & .box-admissao {
    background: rgb(86, 110, 206);
    justify-content: flex-start;
  }

  & .box-beneficios {
    background: rgb(27, 150, 64);
    justify-content: flex-start;
  }

  & .box-inss {
    background: rgb(219, 131, 37);
    justify-content: flex-start;
  }
`
export const BoxItem = styled.div`
  width: 100%;
  height: 250px;
  padding: 0 20px;
  margin-right: 10px;
  cursor: pointer;
  background: #eee;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* justify-items: center; */
  /* align-items: center; */

  span {
    margin-bottom: 20px;
    font-weight: normal;
    font-size: 1.2em;
    color: #122232;
  }
  p {
    font-size: 0.8em;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    line-height: 1.4;
    color: #222222;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
      height: 100px;
      max-width: 100%;
    }
  }
`
