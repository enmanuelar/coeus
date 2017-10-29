import React from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import reducers from '../reducers/index';
import HomeContainer from '../containers/Home';
import Main from '../components/Main/Main';

const store = createStore(
  reducers,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

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
