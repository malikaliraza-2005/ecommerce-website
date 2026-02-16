import React from "react";
import "../components/footer.css";
import FooterAboutCards from "./card-components/footer-about-cards";
import BrandLogo from "../assets/logo-colored.png";
import GooglePlayIcon from "../assets/assets2/Layout/App-icons/google-play-icon.png";
import AppStoreIcon from "../assets/assets2/Layout/App-icons/app-store-icon.png";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-left">
        <img src={BrandLogo} alt="Brand" className="brand-logo" />
        <p>Best information about the company gies here but now lorem ipsum is</p>
        <div className="social-icons">
            
        </div>
        </div>

        <div className="footer-mid">
            <FooterAboutCards
                title="About "
                option1="About Us"
                option2="Find Store"
                option3="Category"
                option4="Blogs"
            />
              <FooterAboutCards
                title=" Partnership"
                option1="About Us"
                option2="Find Store"
                option3="Category"
                option4="Blogs"
            /> 
             <FooterAboutCards
                title="Information"
                option1="Help Center"
                option2="Find Store"
                option3="Categories"
                option4="Blogs"
            /> 
             <FooterAboutCards
                title="Information"
                option1="Help Center"
                option2="Money Refund"
                option3="Shipping"
                option4="Contact Us"
            />
             <FooterAboutCards
                title="For User"
                option1="Login"
                option2="Register"
                option3="Settings"
                option4="My Orders"
            />
        </div>
        <div className="footer-right">
            <h2>Get App</h2>
             <img src={AppStoreIcon} alt="App Store" />
            <img src={GooglePlayIcon} alt="Google Play" />
            
        </div>
    </div>
  );
};

export default Footer;