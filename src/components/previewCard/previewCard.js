import React from 'react';
import './previewCard.scss';

function PreviewCard(props) {
    return (
        <div
          className="previewCard"
          onClick={props.activate.bind(this, props.article.id)}
          key={props.article.id}>
              <img
                className="previewCard__img"
                src={getImg(props.article.img)}
                alt={"imagen de " + props.article.title} />
              <div className="previewCard__text">
                  <h2 className="previewCard__title">{props.article.title}</h2>
                  <h3 className="previewCard__date">{props.article.date}</h3>
            </div>
        </div>
    );
}

function getImg(img) {
    return process.env.PUBLIC_URL + '/assets/' + img;
}

export default PreviewCard;
