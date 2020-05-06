import React from 'react';
import './main.scss'

import Card from '../../../components/card/card';
import Slider from '../../../components/slider/slider';
import PreviewCard from '../../../components/previewCard/previewCard';

function Main(props) {

  const active = props.news.findIndex((e) => e.active);
  const nonActives = props.news.filter((e) => e.active === false);

  return (
    <section className="main">
        <article className="main__main-article">
            <Card data={props.news[active]} />
        </article>
        <aside className="main__preview-articles">
            <PreviewCard data={nonActives} />            
        </aside>
        <Slider />
  </section>
  );
}

export default Main;
