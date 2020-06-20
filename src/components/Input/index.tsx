import React, { InputHTMLAttributes, useRef, useEffect } from 'react'

import { IconBaseProps } from 'react-icons/lib/cjs'

import { useField } from '@unform/core'
import { Container } from './styles'

interface InputForm extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>
  name: string
}

const Input: React.FC<InputForm> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null)
  const { defaultValue, fieldName, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  )
}

export default Input
