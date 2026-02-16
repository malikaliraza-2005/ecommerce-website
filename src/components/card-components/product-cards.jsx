import React from "react";
import "./product-cards.css";
const ProductCard = ({ image, title, discount }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{discount}</p>
    </div>
  );
};

export default ProductCard;
