import React from 'react';
import './previewCard.scss';

function PreviewCard(props) {
    return props.data.map( news => (
        <div className="previewCard" onClick={activate(news.id)} key={news.id}>
          <img src={getImg(news.img)} alt={"imagen de " + news.title} className="previewCard__img"/>
          <div className="previewCard__text">
            <h2 className="previewCard__title">{news.title}</h2>
            <h3 className="previewCard__date">{news.date}</h3>
          </div>
      </div>
    ));
}

function getImg(img) {
    return process.env.PUBLIC_URL + '/assets/' + img;
}

function activate(id) {

}

export default PreviewCard;
