import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui';
import { BrowserRouter } from 'react-router-dom';

const Main = ({ children }) => {
  return (
    <div className="App container">
      <div className="row">
        <BrowserRouter>
          <MuiThemeProvider>
            <div>
              {children}
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    </div>
  )
};

Main.propTypes = {
  children: PropTypes.shape().isRequired
};

export default Main;
