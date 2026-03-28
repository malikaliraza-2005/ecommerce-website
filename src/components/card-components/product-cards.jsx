import React from "react";
import { Link } from "react-router-dom";
import "./product-cards.css";
const ProductCard = ({ image, title, discount,description,className }) => {
  return (
    <Link to="/product-detail" className={`product-card ${className}`}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{discount}</p>
      <p>{description}</p>
    </Link>
  );
};

export default ProductCard;
