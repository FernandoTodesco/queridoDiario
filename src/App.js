import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Section from './components/section/section';
import Footer from './components/footer/footer';


import news from './sample/news.json';


function App() {
  return (
    <div className="app">      
      <div className="app__container">
        <Header />        
        <Section news={news} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
