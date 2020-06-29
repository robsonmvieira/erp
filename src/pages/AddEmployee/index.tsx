import React, { useCallback, useRef, useState } from 'react'

import { FormHandles } from '@unform/core'
import { useDropzone } from 'react-dropzone'

import { FiUpload } from 'react-icons/fi'
import { Container, Content, MyForm } from './styles'
import Input from '../../components/Input'

interface Employee {
  userName: string
  email: string
  cpf: string
  pis: string
  civilId: string
  ctps: string
  fone: string
  address: string
  complement: string
}
const AddEmployee: React.FC = () => {
  const [imageUploadUrl, setImageUploadUrl] = useState('')
  const [selectedFile, setSelectedFile] = useState<File>()
  const formRef = useRef<FormHandles>(null)

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]

    const fileUrl = URL.createObjectURL(file)
    setImageUploadUrl(fileUrl)

    setSelectedFile(file)
  }, [])
  const { getRootProps, getInputProps } = useDropzone({
    onDrop
  })

  const handlSubmitForm = useCallback(
    (data: Employee) => {
      console.log(data)

      const newUser = new FormData()
      const {
        userName,
        email,
        cpf,
        pis,
        civilId,
        ctps,
        fone,
        address,
        complement
      } = data
      newUser.append('name', userName)
      newUser.append('email', email)
      newUser.append('cpf', cpf)
      newUser.append('pis', pis)
      newUser.append('civilId', civilId)
      newUser.append('ctps', ctps)
      newUser.append('fone', fone)
      newUser.append('address', address)
      newUser.append('complement', complement)
      if (selectedFile) {
        newUser.append('image', selectedFile)
      }

      const t = newUser.getAll('image')
      console.log('t', t)
    },
    [selectedFile]
  )
  return (
    <Container>
      <Content>
        <MyForm ref={formRef} onSubmit={handlSubmitForm}>
          <div className="form-upload" {...getRootProps()}>
            <input name="employee-img" {...getInputProps()} />
            {imageUploadUrl ? (
              <div className="container-img">
                <img src={imageUploadUrl} alt="uploade file" />
              </div>
            ) : (
              <div>
                <FiUpload size={20} />
                <p>Drag drop some files here, or click to select files</p>
              </div>
            )}
          </div>

          <div className="container-inputs">
            <h1>Novo Funcionário</h1>
            <div className="input-container">
              <label htmlFor="">Nome</label>
              <Input format="big" name="userName" />
            </div>
            <div className="form-group">
              <div className="input-container">
                <label htmlFor="">CPF</label>
                <Input format="big" name="cpf" />
              </div>
              <div className="input-container">
                <label htmlFor="">Identidade</label>
                <Input format="big" name="civilId" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-container">
                <label htmlFor="">CTPS</label>
                <Input format="big" name="ctps" />
              </div>
              <div className="input-container">
                <label htmlFor="">Pis</label>
                <Input format="big" name="pis" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-container">
                <label htmlFor="">Email</label>
                <Input format="big" name="email" />
              </div>
              <div className="input-container">
                <label htmlFor="">Telefone</label>
                <Input format="big" name="fone" />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="">Endereço</label>
              <Input format="big" name="address" />
            </div>
            <div className="input-container">
              <label htmlFor="">Complemento</label>
              <Input format="big" name="complement" />
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
