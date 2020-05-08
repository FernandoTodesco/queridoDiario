import React from 'react';
import './article.scss'

function Article({location, match}) {    
  const article = location.state.news[match.params.id];
  const imgSrc = `${process.env.PUBLIC_URL}/assets/${article.img}`;

  return (
    <article className="article">
        <h1 className="article__title">{article.title}</h1>
        <h3 className="article__date">{article.date}</h3>
        <img src={imgSrc} alt={`imagen de ${article.title}`} className="article__img"/>
        <h3 className="article__subtitle">{article.subtitle}</h3>
    </article>
  );
}

export default Article;
