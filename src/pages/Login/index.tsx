import React, {useCallback, useRef, useContext} from 'react'

import {FormHandles} from '@unform/core';
import {FiMail, FiLock} from 'react-icons/fi';
import { Container, Content, FormContainer, SideImage } from './styles'
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import {Form} from '@unform/web';
import Input from '../../components/Input'
import Button from '../../components/Button'
import {AuthContext} from '../../context/AuthContext';

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {login} = useContext(AuthContext)
 
  const formRef = useRef<FormHandles>(null)
  const handleSubmit = useCallback(async (data: LoginData) => {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres'),
        email: Yup.string().email('Digite um email válido').required()
      })
      await schema.validate(data, {
        abortEarly: false
      })
      login({email: data.email, password: data.password})
     
    } catch (errors) {
      const erros = getValidationErrors(errors)
      formRef.current?.setErrors(erros)
    }
  }, [login])
  return (
    <>
      <Container>
        <Content>
          <FormContainer>
            <h1>
              Login
            </h1>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input icon={FiMail} name='email' placeholder='e-mail'/>
              <Input type='password' icon={FiLock} name='password' placeholder='Password'/>
              <Button type='submit'>Login</Button>
            </Form>
          </FormContainer>
        <SideImage />
        </Content>
      </Container>
    </>
  )
}

export default Login
