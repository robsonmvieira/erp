import React, { useCallback, useRef, useState } from 'react'

import { FormHandles } from '@unform/core'
import { useDropzone } from 'react-dropzone'
import { Container, Content, MyForm } from './styles'
import Input from '../../components/Input'

const AddEmployee: React.FC = () => {
  const [imageUpload, setImageUpload] = useState<File>()
  const formRef = useRef<FormHandles>(null)

  const handlSubmitForm = useCallback((data: any) => {
    console.log(data)
  }, [])
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0])
    setImageUpload(acceptedFiles[0])
  }, [])
  const { getRootProps, getInputProps } = useDropzone({
    onDrop
  })
  return (
    <Container>
      <Content>
        <MyForm ref={formRef} onSubmit={handlSubmitForm}>
          <div className="form-upload" {...getRootProps()}>
            <input name="employee-img" {...getInputProps()} />
            {imageUpload ? (
              <p>
                File:
                {imageUpload.name}
              </p>
            ) : (
              <p>Drag drop some files here, or click to select files</p>
            )}
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
