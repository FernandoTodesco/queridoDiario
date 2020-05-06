import React from 'react';
import './header.scss';

function Header() {
  return (
      <header className="header">
        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} className="header__logo" alt="logo" />
        <img src={process.env.PUBLIC_URL + '/assets/burger.png'} className="header__burger" alt="nav burger" />        
      </header>
  );
}

export default Header;
