import React from "react";
import NavBar from "../components/nav-bar";
import Category from "../components/category";
import FilterBar from "../components/FilterBar";
import ProductListingCardsList from "../components/card-components/product-listing-cards-list";
import Footer from "../components/footer";
import FooterBottom from "../components/footer-bottom";
import "./product-listing.css"; 
const ProductListing = () => {
  console.log("ProductListing component rendered");
  return (
    <div className="product-listing-page">
      <NavBar />
      <Category />
      <div className="prod-container">
        <div className="prod-left">
          <FilterBar />
        </div>
        <div className="prod-right">
          <ProductListingCardsList />
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default ProductListing;