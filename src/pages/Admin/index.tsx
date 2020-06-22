import React from 'react'

import {
  FiPenTool,
  FiPhone,
  FiList,
  FiUsers,
  FiSearch,
  FiBookOpen,
  FiBarChart
} from 'react-icons/fi'
import {
  Container,
  Content,
  SideLeft,
  Main,
  SideRight,
  SideLeftMenuList,
  EmployeeMenu,
  EmployeeContainer
} from './styles'

// interface LiProps extends LiHTMLAttributes<HTMLLIElement> {
//   icons?: React.ComponentType<IconBaseProps>
// }

const Admin: React.FC = () => {
  return (
    <Container>
      <Content>
        <SideLeft>
          <a href="logo">Super Tech</a>

          <h2>Menu</h2>
          <SideLeftMenuList>
            <li>
              <FiPenTool size={16} />
              <a href="jobs">Equipamentos</a>
            </li>
            <li>
              <FiPhone size={16} />
              <a href="jobs">Fornencedores</a>
            </li>
            <li>
              <FiList size={16} />
              <a href="jobs">Ordens de Serviços</a>
            </li>
            <li>
              <FiUsers size={16} />
              <a href="jobs">Funcionários</a>
            </li>
          </SideLeftMenuList>
        </SideLeft>
        <Main>
          <div>
            <div>
              <FiSearch size={20} />
              <input type="text" name="search" placeholder="buscar" />
            </div>
            <button type="button">Novo Funcionário</button>
          </div>
          <EmployeeMenu>
            <div>
              <span>Funcionários</span>
              <select>
                <option value="volvo">Ordenar Por</option>
              </select>
            </div>
            <div>
              <FiBookOpen size={20} />
              <FiBarChart size={20} />
            </div>
          </EmployeeMenu>
          <EmployeeContainer>
            <h2>Continer</h2>
          </EmployeeContainer>
        </Main>
        <SideRight>
          <h1>Side Right</h1>
        </SideRight>
      </Content>
    </Container>
  )
}

export default Admin
// https://www.graphicpear.com/wp-content/uploads/2017/09/shot_pehia_100_.png
