import React from 'react';
import '../App.css';
import logo from '../assets/logo.png'

function Header() {
  return (
      <header>
        <img src={logo} className="header-logo" alt="logo" />
        <ul>
            <li>
                <a className="listed-link" href="https://reactjs.org" target="#">Jobs</a>
            </li>
            <li>
                <a className="listed-link" href="https://reactjs.org" target="#">Talents</a>
            </li>
            <li>
                <a className="listed-link" href="https://reactjs.org" target="#">Contact</a>
            </li>
        </ul>
      </header>
  );
}

export default Header;
