import React, { useCallback } from 'react'

import { Form } from '@unform/core'
import { Container, Content } from './styles'
import Input from '../../components/Input'

const AddEmployee: React.FC = () => {
  const handlSubmitForm = useCallback(() => {
    console.log('send')
  }, [])
  return (
    <Container>
      <Content>
        <Form onSubmit={handlSubmitForm}>
          <h1>Novo Funcionário</h1>
          <label htmlFor="">Nome</label>
          <Input name="employeer-name" />

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  )
}

export default AddEmployee
