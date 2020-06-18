import React, {ButtonHTMLAttributes, Children} from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}


const Button: React.FC<ButtonProps> = ({ ...rest}) => {
  return (
    <Container type='button' {...rest}></Container>
  )
}

export default Button;