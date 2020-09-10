import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import { Container } from './styles';


import Home from '../pages/Home';
import CompleteForm from '../pages/Form';
import Clients from '../pages/Clients';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/form' component={CompleteForm} />
      <Route path='/clients' component={Clients} />
    </Switch>
  )
}

export default Routes;
