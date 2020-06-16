import React from 'react'

import {FiMail, FiLock} from 'react-icons/fi';
import { Container, Content, Form, SideImage } from './styles'
import Input from '../components/Input'
import Button from '../components/Button'

const Login: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Form>
            <h1>
              Login
            </h1>
            <Input icon={FiMail} name='email' placeholder='e-mail'/>
            <Input icon={FiLock} name='password' placeholder='Password'/>
            <Button>Login</Button>
          </Form>
        <SideImage />
        </Content>
      </Container>
    </>
  )
}

export default Login
