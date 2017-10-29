import React from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.css';

export default function Carousel (props) {
  const renderCarouselItems = (gif, index) => (
    <CarouselItem
      gif={gif}
      side={index}
    />
  );
  return (
    <div className="carousel-container">
      <div className="slider">
        {props.gifs.map(renderCarouselItems)}
      </div>
    </div>
  );
}
