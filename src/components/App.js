import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeContainer from '../containers/Home';
import Main from '../components/Main/Main';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Main>
      <Switch>
        <Route exact component={HomeContainer} />
      </Switch>
    </Main>
  </Provider>
);

export default App;
