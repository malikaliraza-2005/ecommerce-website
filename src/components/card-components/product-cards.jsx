import React from "react";
import "./product-cards.css";
const ProductCard = ({ image, title, discount,description,className }) => {
  return (
    <div className={`product-card ${className}`}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{discount}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
