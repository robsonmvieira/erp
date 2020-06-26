import React, { useCallback, useRef } from 'react'

import { FormHandles } from '@unform/core'
import { FiMail, FiLock } from 'react-icons/fi'
import * as Yup from 'yup'
import { Form } from '@unform/web'
import { useHistory } from 'react-router-dom'
import { Container, Content, FormContainer, SideImage } from './styles'

import getValidationErrors from '../../utils/getValidationErrors'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { useAuth } from '../../state/auth/Provider'
import { useToast } from '../../state/toast/Provider'

interface LoginData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const { login } = useAuth()
  const { addToast } = useToast()
  const history = useHistory()

  const formRef = useRef<FormHandles>(null)
  const handleSubmit = useCallback(
    async (data: LoginData) => {
      try {
        const schema = Yup.object().shape({
          password: Yup.string().min(
            6,
            'A senha deve conter no mínimo 6 caracteres'
          ),
          email: Yup.string().email('Digite um email válido').required()
        })
        await schema.validate(data, {
          abortEarly: false
        })
        login({ email: data.email, password: data.password }).then((res) => {
          history.push('/admin')
        })
      } catch (errors) {
        const erros = getValidationErrors(errors)
        // eslint-disable-next-line no-unused-expressions
        formRef.current?.setErrors(erros)
        addToast({
          type: 'error',
          description: 'rolou um erro',
          title: 'Erro fatal'
        })
      }
    },
    [login, addToast, history]
  )
  return (
    <>
      <Container>
        <Content>
          <FormContainer>
            <h1>Login</h1>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                format="big"
                icon={FiMail}
                name="email"
                placeholder="e-mail"
              />
              <Input
                format="big"
                type="password"
                icon={FiLock}
                name="password"
                placeholder="Password"
              />
              <Button type="submit">Login</Button>
            </Form>
          </FormContainer>
          <SideImage />
        </Content>
      </Container>
    </>
  )
}

export default Login
