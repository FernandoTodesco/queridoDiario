import React from 'react';
import './previewCard.scss';

function PreviewCard(props) {
    return (
        <div
          className="previewCard"
          onClick={props.activate.bind(this, props.article.url)}
          key={props.article.url}>
              <img
                className="previewCard__img"
                src={props.article.urlToImage}
                alt={`imagen de ${props.article.title}`} />
              <div className="previewCard__text">
                  <h2 className="previewCard__title">{props.article.title}</h2>
                  <h3 className="previewCard__date">{props.article.publishedAt}</h3>
            </div>
        </div>
    );
}

export default PreviewCard;
