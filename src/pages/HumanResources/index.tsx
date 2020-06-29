import React from 'react'

import { Container, Content, BoxItem } from './styles'

const HumanResources: React.FC = () => {
  return (
    <Container>
      <Content>
        <BoxItem className="box-admissao">
          <span className="colorWhite">Admissão</span>
          <p className="colorWhite">
            Nesse menu você vai Todo processo de Admissão, tal como cadastrar
            vagas disponíveis.
          </p>
        </BoxItem>
        <BoxItem className="box-desligamento">
          <span className="colorWhite">Desligamento</span>
          <p className="colorWhite">
            Nessa opção você vai poder fazer o processo demissional.
          </p>
        </BoxItem>
        <BoxItem className="box-beneficios">
          <span className="colorWhite">Beneficios</span>
          <p className="colorWhite">
            Nessa opção você poderá cadastrar e retirar benefícios de um
            determinado funcionário.
          </p>
        </BoxItem>
        <BoxItem className="box-inss">
          <span className="colorWhite">Absenteísmo</span>
          <p className="colorWhite">
            Consulte informações do INNS como situação do seu funcionário.
          </p>
        </BoxItem>
      </Content>
    </Container>
  )
}

export default HumanResources
