import React from "react";
import NavBar from "../components/nav-bar";
import Category from "../components/category";
import FilterBar from "../components/FilterBar";
import ProductListingCards from "../components/card-components/product-listing-cards";
import Footer from "../components/footer";
import FooterBottom from "../components/footer-bottom";
import "./product-listing.css"; 
import "./product-gridview.css"; 

function ProductGridView() {
  return (
    <div className="product-listing-page product-gridview-page">
      <NavBar />
      <Category />

      <div className="prod-container">
        <div className="prod-left">
          <FilterBar />
        </div>
        <div className="prod-right">
          <ProductListingCards />
        </div>
      </div>

      <Footer />
      <FooterBottom />
    </div>
  );
}

export default ProductGridView;