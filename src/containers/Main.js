import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from '../components/Main/Main';
import getData from '../utils/Api';

class MainContainer extends Component {
  state = {
    gifs: [],
    input: '',
    isLoading: false,
  };
  componentDidMount () {
    this.handleGetData('hello');
  }
  handleGetData (input) {
    this.setState(() => ({ isLoading: true, }));
    getData(input)
      .then((response) => {
        this.setState(() => ({
          gifs: response,
          isLoading: false,
        }));
      })
      .catch(error => console.error(error));
  }
  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({ input: value, }));
  };
  handleSubmit = () => {
    this.handleGetData(this.state.input);
  };
  handleKeyPress = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      this.handleGetData(this.state.input);
    }
  };
  render () {
    return (
      <MuiThemeProvider>
        <Main
          input={this.state.input}
          gifs={this.state.gifs}
          isLoading={this.state.isLoading}
          onSubmit={this.handleSubmit}
          onInputChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
      </MuiThemeProvider>
    );
  }
}

export default MainContainer;
