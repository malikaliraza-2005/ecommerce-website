import React from "react";
import "./newsletter-subscribe-section.css";

const NewsletterSubscribeSection = () => {
  return (
    <div className="newsletter-subscribe-section">
      <h1>Subscribe to our Newsletter</h1>
      <p>Get the latest updates and offers.</p>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  );
}
export default NewsletterSubscribeSection;