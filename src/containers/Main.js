import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from '../components/Main/Main';
import getData from '../utils/Api';

class MainContainer extends Component {
  state = {
    gifs: [],
    input: ''
  };
  componentDidMount () {
    this.handleGetData('hello');
  }
  handleGetData (input) {
    getData(input)
      .then((response) => {
        this.setState(() => ({ gifs: response }));
      })
      .catch(error => console.error(error));
  }
  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({ input: value }));
  };
  handleSubmit = () => {
    this.handleGetData(this.state.input);
  };
  render () {
    return (
      <MuiThemeProvider>
        <Main
          input={this.state.input}
          gifs={this.state.gifs}
          onSubmit={this.handleSubmit}
          onInputChange={this.handleInputChange}
        />
      </MuiThemeProvider>
    );
  }
}

export default MainContainer;
