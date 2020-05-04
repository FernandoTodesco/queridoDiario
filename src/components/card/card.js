import React from 'react';
import './card.scss';

function Card(props) {
  const imgSrc = process.env.PUBLIC_URL + '/assets/' + props.data.img;
  return (
      <div className="card">
          <h3 className="card__date">{props.data.date}</h3>
          <h1 className="card__title">{props.data.title}</h1>
          <img src={imgSrc} alt={"imagen de " + props.data.title} className="card__img"/>
          <h3 className="card__subtitle">{props.data.subtitle}</h3>
      </div>
  );
}

export default Card;
