import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from '../components/Home/Home';
import getData from '../utils/Api';

import { connect } from 'react-redux';
import { homeActions } from '../actions';
//class MainContainer extends Component {
//  state = {
//    gifs: [],
//    input: '',
//    isLoading: false,
//  };
//  componentDidMount () {
//    this.handleGetData('hello');
//  }
//  handleGetData (input) {
//    this.setState(() => ({ isLoading: true, }));
//    getData(input)
//      .then((response) => {
//        this.setState(() => ({
//          gifs: response,
//          isLoading: false,
//        }));
//      })
//      .catch(error => console.error(error));
//  }
//  handleInputChange = (e) => {
//    const value = e.target.value;
//    this.setState(() => ({ input: value, }));
//  };
//  handleSubmit = () => {
//    this.handleGetData(this.state.input);
//  };
//  handleKeyPress = (e) => {
//    if (e.charCode === 13) {
//      e.preventDefault();
//      this.handleGetData(this.state.input);
//    }
//  };
//  render () {
//    return (
//      <MuiThemeProvider>
//        <Home
//          input={this.state.input}
//          gifs={this.state.gifs}
//          isLoading={this.state.isLoading}
//          onSubmit={this.handleSubmit}
//          onInputChange={this.handleInputChange}
//          onKeyPress={this.handleKeyPress}
//        />
//      </MuiThemeProvider>
//    );
//  }
//}

const mapStateToProps = ({home}) => home;
const mapDispatchToProps =  dispatch => ({
  onInputChange: e => homeActions.onInputChange(dispatch, e.target.value)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
