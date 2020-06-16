import React from 'react'

import {FiMail, FiLock} from 'react-icons/fi';
import { Container, Content, FormContainer, SideImage } from './styles'
import {Form} from '@unform/web';
import Input from '../../components/Input'
import Button from '../../components/Button'

const Login: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <>
      <Container>
        <Content>
          <FormContainer>
            <h1>
              Login
            </h1>
            <Form onSubmit={handleSubmit}>
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
