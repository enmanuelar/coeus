import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from '../components/Main/Main';
import getResource from '../utils/Api';

class MainContainer extends Component {
  state = {
    gifs: [],
  };
  componentDidMount () {
    getResource('hello')
      .then((response) => {
        this.setState(() => ({ gifs: response, }));
      })
      .catch(error => console.error(error));
  }
  handleSubmit () {
    console.log('This is not working yet no bulto');
  }
  render () {
    return (
      <MuiThemeProvider>
        <Main
          gifs={this.state.gifs}
          onSubmit={this.handleSubmit}
        />
      </MuiThemeProvider>
    );
  }
}

export default MainContainer;
