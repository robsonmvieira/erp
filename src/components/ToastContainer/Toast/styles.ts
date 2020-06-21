import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

interface ToastProps {
  type?: 'info' | 'success' | 'error'
  hasDescription: boolean
}

const toastTypeVariable = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `
}
export const Container = styled(animated.div)<ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  margin-bottom: 5px;

  ${(props) => toastTypeVariable[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }
  div {
    flex: 1;

    strong {
      font-family: 'Ubuntu';
    }

    p {
      margin-top: 5px;
      font-size: 0.7em;
      font-family: 'Roboto';
      font-weight: normal;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 18px;
    background: transparent;
    border: 0;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;
      justify-content: space-between;
    `}
`
