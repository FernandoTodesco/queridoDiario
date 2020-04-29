import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Card from './components/card/card';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="app">      
      <div className="container">
        <header>
          <Header />        
        </header>
        <article>
          <Card />          
        </article>
        <section>
          slider
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
