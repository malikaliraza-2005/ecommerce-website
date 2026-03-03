import React from "react";
import "./region-card.css";
const RegionCard = ({ image, title , description}) => {
  return (
    <div className="region-card">
        <div className="flag">
         <img src={image} alt={title} />
        </div>
        <div className="description">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  );
}
export default RegionCard;