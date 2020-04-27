import React from 'react';
import './App.css';
import Header from './shared/header';
import banner from './assets/banner.jpg';

function App() {
  return (
    <div className="general">
      <div className="app">
        <div className="container">
          <section>
            <Header />
            <article>
              <h1 className="titulo">Primer Artículo</h1>
              <h3 className="descripcion">Lugar para descripción del artículo</h3>
            </article>
          </section>
          <div className="banner">
            <img src={banner} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
