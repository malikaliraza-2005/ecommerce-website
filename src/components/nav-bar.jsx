import React from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";
import BrandLogo from "../assets/logo-colored.png";
import userIcon from "../assets/user.png";
import messengerIcon from "../assets/messenger.png";
import heartIcon from "../assets/heart.png";
import cartIcon from "../assets/grocery-store.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <Link to="/">
          <img src={BrandLogo} alt="Brand" className="brand-logo" />
        </Link>
      </div>

      <div className="nav-center">
        <input type="search" id="search-input" name="search" placeholder="Search" className="search-input" />
        <select id="search-category" name="category" className="search-select" defaultValue="all-category"><option value="all-category">All category</option></select>
        <button className="search-btn">Search</button>
      </div>

      <div className="nav-right">
        <div className="nav-item">
          <img src={userIcon} alt="Profile" />
          <span>Profile</span>
        </div>
        <div className="nav-item">
          <img src={messengerIcon} alt="Message" />
          <span>Message</span>
        </div>
        <div className="nav-item">
          <img src={heartIcon} alt="Orders" />
          <span>Orders</span>
        </div>
        <div className="nav-item">
          <img src={cartIcon} alt="My cart" />
          <Link to="/cart"><span>My cart</span></Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;