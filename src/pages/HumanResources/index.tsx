import React, { useCallback } from 'react'

import { useHistory } from 'react-router-dom'
import { Container, Content, BoxItem } from './styles'
import taksSvg from '../../assets/images/rh/task.svg'
import desligamentoSvg from '../../assets/images/rh/handshake.svg'
import AbsenteismoSvg from '../../assets/images/rh/calendar.svg'
import benefitsSvg from '../../assets/images/rh/benefits.svg'

const HumanResources: React.FC = () => {
  const history = useHistory()
  const goToNewEmployeer = useCallback(() => {
    history.push('/novo-funcionario')
  }, [history])
  return (
    <Container>
      <Content>
        <BoxItem className="box-admissao" onClick={goToNewEmployeer}>
          <div>
            <img src={taksSvg} alt="hire icon img" />
          </div>
          <span className="colorWhite">Admissão</span>
          <p className="colorWhite">
            Nesse menu você vai Todo processo de Admissão, tal como cadastrar
            vagas disponíveis.
          </p>
        </BoxItem>
        <BoxItem className="box-desligamento">
          <div>
            <img src={desligamentoSvg} alt="fired icon img" />
          </div>
          <span className="colorWhite">Desligamento</span>
          <p className="colorWhite">
            Nessa opção você vai poder fazer o processo demissional.
          </p>
        </BoxItem>
        <BoxItem className="box-beneficios">
          <div>
            <img src={benefitsSvg} alt="benefits icon img" />
          </div>
          <span className="colorWhite">Beneficios</span>
          <p className="colorWhite">
            Nessa opção você poderá cadastrar e retirar benefícios de um
            determinado funcionário.
          </p>
        </BoxItem>
        <BoxItem className="box-inss">
          <div>
            <img src={AbsenteismoSvg} alt="absenteismo icon img" />
          </div>
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
