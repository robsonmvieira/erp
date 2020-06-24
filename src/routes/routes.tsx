import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import Dashboard from '../pages/Dashboard'
import AddEmployee from '../pages/AddEmployee'

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/novo-funcionario" component={AddEmployee} />
    </Switch>
  )
}
export default routes
