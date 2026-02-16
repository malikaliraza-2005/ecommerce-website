import React from "react";
import "./category-grid-cards.css";

const CategoryGridCards = ({ image, title, description }) => {
  return (
    <div className="category-card">
      <div className="category-card-content">
        <div className="category-card-title">{title}</div>
        <div className="category-card-desc">{description}</div>
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default CategoryGridCards;