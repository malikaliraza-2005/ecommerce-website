import React from "react";
import "./footer-about-cards.css";

const FooterAboutCards = ({ title, option1, option2, option3, option4 }) => {
  return (
    <div className="footer-about-card">
      <h3>{title}</h3>
      <p>{option1}</p>
      <p>{option2}</p>
      <p>{option3}</p>
      <p>{option4}</p>
    </div>
  );
}
export default FooterAboutCards;