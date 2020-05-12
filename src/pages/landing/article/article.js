import React from 'react';
import './article.scss'

function Article({location, match}) {    
  const article = location.state.news[match.params.id];

  return (
    <article className="article">
        <div className="article__header">
          <h3 className="article__author">{article.author}</h3>
          <h3 className="article__date">{article.publishedAt}</h3>
        </div>
        <h1 className="article__title">{article.title}</h1>
        <img src={article.urlToImage} alt={`imagen de ${article.title}`} className="article__img"/>
        <h3 className="article__content">{article.content}</h3>
    </article>
  );
}

export default Article;
