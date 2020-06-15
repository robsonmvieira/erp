import React from 'react'

import { Container, Content, Form, SideImage } from './styles'
import Input from '../components/Input'

const Login: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Form>
            <Input />
          </Form>
        </Content>
        <SideImage />
      </Container>
    </>
  )
}

export default Login
