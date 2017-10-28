import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import reducers from '../reducers';
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
