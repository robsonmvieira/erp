import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';

const routes = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/admin' component={Admin} />
      <Route path='/dashboard'component={Dashboard} />
    </Switch>
  )
}
export default routes;