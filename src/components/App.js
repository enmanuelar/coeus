import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainContainer from '../containers/Main';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact component={MainContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;
