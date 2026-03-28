import React from "react";  
import { Link } from "react-router-dom";
import "./category.css";

const Category = () => {
  return (
    <div className="category">
        <div className="category-left">
            <Link to="/product-listing"><button>Product Listing</button></Link>
            <Link to="/product-gridview"><button>Grid View</button></Link>
            <Link to="/product-detail"><button>Product Detail</button></Link>
            <Link to="/cart"><button>Cart</button></Link>
            <button>Hot Offers</button>
            <button>Gift Boxes</button>
            <button>Projects</button>
            <button>Help</button>
        </div>
          <div className="category-right">
            <div className="category-row">
              <button>English, USD</button>
              <button>Ship to</button>
            </div>
          </div>
    </div>
  );
}
export default Category;