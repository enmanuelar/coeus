import React from 'react';
import logo from '../../logo.svg';
import './Main.css';

export default function Main (props) {
    console.log('PROPS', props)
    if (!props.gifs.length > 0) {
        return null;
    }
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Coeus</h2>
            </div>
            <p className="App-intro">
                <img src={props.gifs[2].images.original.url} style={{width: props.gifs[2].images.original.width, height: props.gifs[2].images.original.height}}alt=""/>
            </p>
        </div>
    );
}
