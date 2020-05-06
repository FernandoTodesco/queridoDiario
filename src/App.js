import React from 'react';
import './App.scss';

import Layaout from './core/components/layout/layout';
import Header from './core/components/header/header';
import Main from './pages/landing/main/main';
import Footer from './core/components/footer/footer';


import news from './sample/news.json';


function App() {
  return (
    <Layaout>
      <Header />        
      <Main news={news} />
      <Footer />
    </Layaout>
  );
}


export default App;
