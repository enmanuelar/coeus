import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui';
import { BrowserRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Main = ({ children }) => {
  const muiTheme = getMuiTheme({
    palette: {
      primary1Color: '#fb6262',
      secondaryColor: '#fb6262',
      primaryTextColor: '#00B2A7A70',
      secondaryTextColor: '#B2A7A7',
      accent1Color: '#555',
      textColor: '#B2A7A7'
    }
  });
  return (
    <div className="App container">
      <div className="row">
        <BrowserRouter>
          <MuiThemeProvider muiTheme={muiTheme}>
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
