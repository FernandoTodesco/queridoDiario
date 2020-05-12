import React from 'react';
import './card.scss';

function Card(props) {
  return (
      <div className="card">
          <h3 className="card__date">{props.article.publishedAt}</h3>
          <h1 className="card__title">{props.article.title}</h1>
          <img src={props.article.urlToImage} alt={`imagen de ${props.article.title}`} className="card__img"/>
          <h3 className="card__subtitle">{props.article.description}</h3>
      </div>
  );
}

export default Card;
