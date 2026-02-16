import React from "react";
import "./hero.css";
import ProfileImage from "../assets/profile.png";
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
       <button>Automobiles</button>
       <button>Cloths and wear</button>
       <button>Home interiors</button>
        <button>Computer and tech</button>
       <button>Tools and Equipment</button>
       <button>Sports and Outdoor</button>
       <button>Animal and pets</button>
       <button>Machinery tools</button>
       <button>More category</button>

        </div>
        <div className="hero-mid">
      <p>Latest Trending</p>
      <b><p>Electronic Items</p></b>
      <button>Learn More</button>
    </div>
        <div className="hero-right">
            <div className="one">
        <img src={ProfileImage} alt="Profile" />
        <div className="text">
        <p>Hi User, </p> 
           <p>lets get started</p> 
        </div>
       
        
            </div>
             <div className="btn">
            <button id="join-btn">Join Now</button>
            <button id="login-btn">Login</button>

        </div>
            <div className="two">
             <div className="two-content">
                <p>Get US $10 off</p>
                <p>with a new</p>
                <p>supplier</p>
             </div>
            </div>
            <div className="three">
   <div className="three-content">
                <p>Get US $10 off</p>
                <p>with a new</p>
                <p>supplier</p>
             </div>
            </div>
        </div>
    </div>
  );
}
export default Hero;