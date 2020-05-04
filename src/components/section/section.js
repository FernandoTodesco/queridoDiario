import React from 'react';
import './section.scss';

import Card from '../card/card';
import Slider from '../slider/slider';
import PreviewCard from '../previewCard/previewCard';

function Section(props) {

  const active = props.news.findIndex((e) => e.active);
  const nonActives = props.news.filter((e) => e.active === false);

  return (
    <section className="section">
        <article className="section__main-article">
            <Card data={props.news[active]} />
        </article>
        <aside className="section__preview-articles">
            <PreviewCard data={nonActives} />            
        </aside>
        <Slider />
  </section>
  );
}

export default Section;
