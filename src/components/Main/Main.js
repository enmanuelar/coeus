import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import logo from '../../donald_trump_PNG_00000.png';
import './Main.css';

export default function Main (props) {
  const inputStyle = {
    color: 'rgba(241, 217, 217, 0.87)',
  };
  return props.gifs.length > 0 ? (
    <div className="App container">
      <div className="row">
        <div className="App-header col-sm-12">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="col-sm-12">
          <TextField
            hintText="Find gif"
            inputStyle={inputStyle}
          />
          <FlatButton
            label="Find Gif"
            primary
            onClick={props.onSubmit}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p className="App-intro">
            <div className="gif-container">
              <img src={props.gifs[0].images.original.url} style={{ width: props.gifs[0].images.original.width, height: props.gifs[0].images.original.height }} alt="" />
            </div>
          </p>
        </div>
      </div>
    </div>
  ) : null;
}

Main.propTypes = {
  gifs: PropTypes.arrayOf.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
