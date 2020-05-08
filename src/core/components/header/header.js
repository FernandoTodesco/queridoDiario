import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <header className="header">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} className="header__logo" alt="logo" />
        </Link>
        <img src={`${process.env.PUBLIC_URL}/assets/burger.png`} className="header__burger" alt="nav burger" />        
      </header>
  );
}

export default Header;
