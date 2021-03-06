import React from 'react';
import './slider.scss';

function Slider() {
  return (
      <div className="slider">
          <div className="slider__item"></div>
          <div className="slider__item slider__item--active"></div>
          <div className="slider__item"></div>
          <div className="slider__item"></div>
      </div>
  );
}

export default Slider;
