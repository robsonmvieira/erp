import React, {InputHTMLAttributes} from 'react'

import { Container } from './styles'
import { IconBaseProps } from 'react-icons/lib/cjs'

interface InputForm extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>
  name: string
}

const Input: React.FC<InputForm> = ({icon: Icon, ...rest}) => {
  return (
    <Container>
      {Icon &&  <Icon size={20}/>}
      <input {...rest}/>
    </Container>
  )
}

export default Input
