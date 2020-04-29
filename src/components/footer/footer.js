import React from 'react';
import './footer.scss';
import gitLogo from '../../assets/gitLogo.png';

function Footer() {
  return (
      <div className="footer">
          <div className="footer__text">
            <p>Check the</p>
            <p>repo on</p>
          </div>
        <img src={gitLogo} className="footer__logo" alt="footer logo" />
      </div>
  );
}

export default Footer;
