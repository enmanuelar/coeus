import React from 'react';
import loadingImg from '../../trump-face.png';
import './Loading.css';

export default function Loading () {
  return (
    <div className="loading-container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <img
            src={loadingImg}
            className="loading-image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
