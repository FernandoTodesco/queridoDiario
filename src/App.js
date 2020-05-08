import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Layaout from './core/components/layout/layout';
import Header from './core/components/header/header';
import Pages from './pages/pages';
import Footer from './core/components/footer/footer';

function App() {
  return (
    <Router>
      <Layaout>
        <Header />        
        <Pages />
        <Footer />
      </Layaout>
    </Router>
  );
}

export default App;
