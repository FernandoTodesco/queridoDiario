import React from 'react';
import './card.scss';
import imgFirst from '../../assets/imgFirst.jpg';

function Card() {
  return (
      <div className="card">
          <h3 className="card__date">date</h3>
          <h1 className="card__title">title</h1>
          <h3 className="card__subtitle">subtitle</h3>
          <img src={imgFirst} alt="imagen del artículo" className="card__img"/>
      </div>
  );
}

export default Card;
