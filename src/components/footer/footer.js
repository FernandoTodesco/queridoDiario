import React from 'react';
import './footer.scss';

function Footer() {
  return (
      <footer className="footer">
        <a className="footer footer__link" href="https://github.com/FernandoTodesco/queridoDiario" target="_blank" rel="noopener noreferrer">
          <div className="footer__text">
            <p>Check the</p>
            <p>repo here</p>
          </div>
          <img className="footer__logo" src={process.env.PUBLIC_URL + '/assets/gitLogo.png'} alt="footer logo" />
        </a>
      </footer>
  );
}

export default Footer;
