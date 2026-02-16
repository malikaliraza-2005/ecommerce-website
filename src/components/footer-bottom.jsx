import React from 'react';
import "./footer-bottom.css";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom-left">
        <span>&copy; 2023 Ecommerce.</span>
      </div>
      <div className="footer-bottom-right">
        <img src="https://flagcdn.com/us.svg" alt="US Flag" className="footer-flag" />
        <span className="footer-lang">English</span>
        <span className="footer-arrow">&#x25B2;</span>
      </div>
    </div>
  );
}

export default FooterBottom;