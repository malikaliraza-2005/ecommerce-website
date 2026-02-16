import React from "react";  
import "./category.css";
import menuIcon from "../assets/menu-icon.png";

const Category = ({ name, image }) => {
  return (
    <div className="category">
        <div className="category-left">
            <button>Category</button>
            <button>Hot Offers</button>
            <button>Gift Boxes</button>
            <button>Category</button>
            <button>Projects</button>
            <button>Menu Item</button>
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