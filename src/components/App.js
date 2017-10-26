import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainContainer from '../containers/Main';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact component={MainContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
