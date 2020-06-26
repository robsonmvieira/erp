import React, { useCallback, useRef } from 'react'

import { Form, FormHandles } from '@unform/core'
import { Container, Content, MyForm } from './styles'
import Input from '../../components/Input'

const AddEmployee: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handlSubmitForm = useCallback((data: any) => {
    console.log(data)
  }, [])
  return (
    <Container>
      <Content>
        <MyForm ref={formRef} onSubmit={handlSubmitForm}>
          <div className="form-upload">
            <input name="employee-img" type="file" />
          </div>

          <div className="container-inputs">
            <h1>Novo Funcionário</h1>
            <div className="input-container">
              <label htmlFor="">Nome</label>
              <Input format="big" name="employee-name" />
            </div>
            <div className="form-group">
              <div className="input-container">
                <label htmlFor="">CPF</label>
                <Input format="big" name="employee-cpf" />
              </div>
              <div className="input-container">
                <label htmlFor="">Identidade</label>
                <Input format="big" name="employee-civil-id" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-container">
                <label htmlFor="">CTPS</label>
                <Input format="big" name="employee-ctps" />
              </div>
              <div className="input-container">
                <label htmlFor="">Pis</label>
                <Input format="big" name="employee-pis" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-container">
                <label htmlFor="">Email</label>
                <Input format="big" name="employee-email" />
              </div>
              <div className="input-container">
                <label htmlFor="">Telefone</label>
                <Input format="big" name="employee-fone" />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="">Endereço</label>
              <Input format="big" name="employee-address" />
            </div>
            <div className="input-container">
              <label htmlFor="">Complemento</label>
              <Input format="big" name="employee-complement" />
            </div>
            <div>
              <button type="submit">Cadastrar</button>
            </div>
          </div>
        </MyForm>
      </Content>
    </Container>
  )
}

export default AddEmployee
