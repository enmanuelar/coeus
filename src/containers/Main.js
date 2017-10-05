import React, { Component } from 'react';
import Main from '../components/Main/Main';
import { getResource } from '../utils/Request';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MainContainer extends Component {
  state = {
    gifs: []
  };
  componentDidMount () {
    getResource('hello')
        .then((response) => {
              this.setState((prevState, props) => {
                return {gifs: response}
              });
            }
        )
        .catch(error => console.error(error));
  };
  handleFindGif () {
    console.log('This is not working yet no bulto')
  };
  render () {
    return (
        <MuiThemeProvider>
          <Main
              gifs={this.state.gifs}
              onFindGif={this.handleFindGif}
          />
        </MuiThemeProvider>
    );
  }
}

export default MainContainer;
