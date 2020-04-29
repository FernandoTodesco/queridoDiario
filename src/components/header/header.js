import React from 'react';
import './header.scss';
import logo from '../../assets/logo.png';
import burger from '../../assets/burger.png';

function Header() {
  return (
      <div className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <img src={burger} className="header__burger" alt="nav burger" />        
      </div>
  );
}

export default Header;
