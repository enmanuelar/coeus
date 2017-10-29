import React from 'react';
import './Carousel.css';

export default function CarouselItem ({ gif, side, }) {
  const setSideClass = (side) => {
    switch (side) {
      case 0:
        return 'img-left gif-img';
      case 2:
        return 'img-right gif-img';
      default:
        return 'gif-img';
    }
  };
  return (
    <div className="carousel-container">
      <div className="slider">
        <div className="col-sm-4">
          <img
            src={gif.images.original.url}
            className={setSideClass(side)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
