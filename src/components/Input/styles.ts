import styled, { css } from 'styled-components'

interface InputProps {
  format?: 'small' | 'medium' | 'big'
}

const size = {
  small: css`
    width: 33%;
  `,
  medium: css`
    width: 66%;
  `,
  big: css`
    width: 100%;
  `
}

export const Container = styled.div<InputProps>`
  display: flex;
  align-items: center;
  border: 1px solid #eceffc;
  padding: 10px 20px;
  margin-bottom: 10px;
  /* width: 400px; */
  ${(props) => size[props.format || 'medium']}

  input {
    background: transparent;
    border: 0;
    width: 100%;
    outline: none;
    color: #122232;
  }

  > svg {
    margin-right: 16px;
    color: #122232;
  }
`
// export const CustomInput = styled(input)<InputProps>`
// `
