import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import Dashboard from '../pages/Dashboard'
import AddEmployee from '../pages/AddEmployee'
import HumanResources from '../pages/HumanResources'

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/novo-funcionario" component={AddEmployee} />
      <Route path="/recursos-humanos" component={HumanResources} />
    </Switch>
  )
}
export default routes
