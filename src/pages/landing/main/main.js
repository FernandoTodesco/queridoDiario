import React, {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import './main.scss'

import Card from '../../../components/card/card';
import Slider from '../../../components/slider/slider';
import PreviewCard from '../../../components/previewCard/previewCard';
import Spinner from '../../../components/spinner/spinner';
import newsData from '../../../services/newsData';

function Main() {  

  const [news, setNews] = useState([]);
  const [mainArt, setMainArt] = useState(0);
  const [previewArts, setPreviewArts] = useState([]);
  const [loading, setLoading ] = useState(true);
    
  useEffect(()=>{
    setNews(newsData());
    setPreviewArts(news.filter((e) => e.id !== mainArt));
    
    setTimeout(function(){
      setLoading(false);
    }, 1000); 
    
  }, [news, mainArt])  
  
  const activate = (id) => {
    setMainArt(id);
  }
  
  return (
    loading 
    ? <Spinner />
    : <main className="main">
        <article className="main__main-article">
          <Link to={{ pathname:`/article/${mainArt}`, state: { news: news }}}>
            <Card article={news[mainArt]} />      
          </Link>         
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
      </main>
  );
}

export default Main;