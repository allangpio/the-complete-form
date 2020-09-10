import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import { Container } from './styles';

import Home from '../pages/Home';
import Clients from '../pages/Clients';
import Step1 from '../pages/Step1';
import Step2 from '../pages/Step2';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/step1" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/clients" component={Clients} />
    </Switch>
  );
};

export default Routes;
