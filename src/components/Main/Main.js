import React from 'react';
import logo from '../../logo.svg';
import './Main.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default function Main(props) {
  if (!props.gifs.length > 0) {
    return null;
  }
  const inputStyle = {
    color: 'rgba(241, 217, 217, 0.87)',
  };
  return (
    <div className="App container">
      <div className="row">
        <div className="App-header col-sm-12">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coeus</h2>
        </div>
        <div className="col-sm-12">
          <TextField
            hintText="Find gif"
            inputStyle={inputStyle}
          />
          <FlatButton
            label="Find Gif"
            primary
            onClick={props.onFindGif}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p className="App-intro">
            <img src={props.gifs[0].images.original.url} style={{ width: props.gifs[0].images.original.width, height: props.gifs[0].images.original.height }} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
}
