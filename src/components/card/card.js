import React from 'react';
import './card.scss';

function Card(props) {
  const imgSrc = `${process.env.PUBLIC_URL}/assets/${props.article.img}`;
  return (
      <div className="card">
          <h3 className="card__date">{props.article.date}</h3>
          <h1 className="card__title">{props.article.title}</h1>
          <img src={imgSrc} alt={`imagen de ${props.article.title}`} className="card__img"/>
          <h3 className="card__subtitle">{props.article.subtitle}</h3>
      </div>
  );
}

export default Card;
