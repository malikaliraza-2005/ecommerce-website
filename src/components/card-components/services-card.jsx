import React from "react";
import "./services-card.css";

const ServicesCard = ({ image, description }) => {
  return (
    <div className="services-card">

      <img src={image} alt="Service" />
      <p>{description}</p>
    </div>
  );
}
export default ServicesCard;