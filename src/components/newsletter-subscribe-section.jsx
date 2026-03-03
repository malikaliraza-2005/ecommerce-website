import React from "react";
import "./newsletter-subscribe-section.css";

const NewsletterSubscribeSection = () => {
  return (
    <div className="newsletter-subscribe-section">
      <h1>Subscribe to our Newsletter</h1>
      <p>Get daily new for upcoming offers from many suppliers all over the world.</p>
      <div className="email-button">

      <input type="email" id="newsletter-email" name="email" placeholder="Enter your email" />
      <button>Subscribe</button>
      </div>  
    </div>
  );
}
export default NewsletterSubscribeSection;