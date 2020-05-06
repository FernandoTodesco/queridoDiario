import React, {useState} from 'react';
import './main.scss'

import Card from '../../../components/card/card';
import Slider from '../../../components/slider/slider';
import PreviewCard from '../../../components/previewCard/previewCard';

function Main(props) {
  
  const [news] = useState(props.news);
  const [mainArt, setMainArt] = useState(0);
    
  const previewArts = news.filter((e) => e.id !== mainArt);
  
  const activate = (id) => {
    setMainArt(id);
  }
    
  return (
    <section className="main">
      <article className="main__main-article">            
        <Card article={news[mainArt]} />            
      </article>
      <aside className="main__preview-articles">
        {previewArts.map( article => 
          <PreviewCard
            article={article}
            key={article.id}
            activate={activate}
          />            
        )}
      </aside>
      <Slider />
    </section>
  );
}

export default Main;
