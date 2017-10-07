import React from 'react';
import App from 'containers/Main';

it('renders without crashing', () => {
  const div = document.createElement('div');
  MainContainer.render(<App />, div);
});
