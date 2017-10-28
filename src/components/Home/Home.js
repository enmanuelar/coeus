import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import logo from '../../donald_trump_PNG_00000.png';
import Loading from '../Loading/Loading';
import Carousel from '../Carousel/Carousel';
//import '../Home.css';

class Home extends Component {
  static propTypes = {
    onInputChange: PropTypes.func.isRequired
  };

  state = {
    queryString: 'hello'
  };

  //var inputStyle = {
  //  color: 'rgba(241, 217, 217, 0.87)',
  //};

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="App-header col-sm-12">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-sm-12">
            <TextField
              hintText="Find gif"
              //inputStyle={inputStyle}
              value={this.props.input}
              onChange={this.props.onInputChange}
              onKeyPress={this.props.onKeyPress}
            />
            <FlatButton
              label="Find Gif"
              primary
              onClick={this.props.onSubmit}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p className="App-intro">
              <div className="gif-container">
                {
                  this.props.isLoading ?
                    <Loading /> :
                    <Carousel
                      gifs={this.props.data}
                    />
                }
              </div>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

//export default function Home (props) {
//  const inputStyle = {
//    color: 'rgba(241, 217, 217, 0.87)',
//  };
//  return props.gifs.length > 0 ? (
//    <div className="App container">
//      <div className="row">
//        <div className="App-header col-sm-12">
//          <img src={logo} className="App-logo" alt="logo" />
//        </div>
//        <div className="col-sm-12">
//          <TextField
//            hintText="Find gif"
//            inputStyle={inputStyle}
//            value={props.input}
//            onChange={props.onInputChange}
//            onKeyPress={props.onKeyPress}
//          />
//          <FlatButton
//            label="Find Gif"
//            primary
//            onClick={props.onSubmit}
//          />
//        </div>
//      </div>
//      <div className="row">
//        <div className="col-sm-12">
//          <p className="App-intro">
//            <div className="gif-container">
//              {
//                props.isLoading ?
//                  <Loading /> :
//                  <Carousel
//                    gifs={props.gifs}
//                  />
//              }
//            </div>
//          </p>
//        </div>
//      </div>
//    </div>
//  ) : null;
//}

//Home.propTypes = {
//  gifs: PropTypes.arrayOf.isRequired,
//  onSubmit: PropTypes.func.isRequired,
//  onKeyPress: PropTypes.func.isRequired,
//  onInputChange: PropTypes.func.isRequired,
//  isLoading: PropTypes.bool.isRequired,
//  input: PropTypes.string.isRequired,
//};
