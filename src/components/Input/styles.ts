import styled, { css } from 'styled-components'

const size = {
  small: css`
    width: 200px;
  `,
  medium: css`
    width: 400px;
  `,
  big: css`
    width: 600px;
  `
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #eceffc;
  padding: 10px 20px;
  margin-bottom: 10px;
  width: 400px;

  input {
    background: transparent;
    border: 0;
    width: 100%;
    outline: none;
  }

  > svg {
    margin-right: 16px;
    color: #122232;
  }
`
