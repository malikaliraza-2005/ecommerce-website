import React, { useState } from "react";
import NavBar from "../components/nav-bar";
import Category from "../components/category";
import Footer from "../components/footer";
import FooterBottom from "../components/footer-bottom";
import iphoneImage from "../assets/assets2/Image/tech/iphone.png";
import mobileImage from "../assets/assets2/Image/tech/mobile.png";
import laptopImage from "../assets/assets2/Image/tech/laptop.png";
import cameraImage from "../assets/assets2/Image/tech/camera.png";
import watchImage from "../assets/assets2/Image/tech/watch.png";
import headphoneImage from "../assets/assets2/Image/tech/headphone2.png";
import "./product-detail.css";

function ProductDetail() {
  const [activeTab, setActiveTab] = useState("Description");

  const thumbnails = [
    iphoneImage,
    mobileImage,
    laptopImage,
    cameraImage,
    watchImage,
    headphoneImage,
  ];

  const relatedProducts = [
    { image: mobileImage, title: "Men Blazers Sets Elegant Formal", price: "$7.00 - $99.50" },
    { image: watchImage, title: "Men Shirt Sleeve Polo Contrast", price: "$7.00 - $99.50" },
    { image: headphoneImage, title: "Apple Watch Series Space Gray", price: "$7.00 - $99.50" },
    { image: laptopImage, title: "Basketball Crew Socks Long Stuff", price: "$7.00 - $99.50" },
    { image: cameraImage, title: "New Summer Men's castrol T-Shirts", price: "$7.00 - $99.50" },
  ];

  function RelatedCard({ image, title, price }) {
    return (
      <div className="related-card-sidebar">
        <div className="related-image-wrapper-sidebar">
          <img src={image} alt={title} />
        </div>
        <div className="related-info-sidebar">
          <h4 className="related-title-sidebar">{title}</h4>
          <span className="related-price-sidebar">{price}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <NavBar />
      <Category />
      <div className="breadcrumb">
        Home &gt; Clothing &gt; Men's wear &gt; Summer clothing
      </div>

      <div className="product-main">
        <div className="image-gallery">
          <img src={iphoneImage} alt="Main product" className="main-image" />
          <div className="thumbnails">
            {thumbnails.map((src, idx) => (
              <img key={idx} src={src} alt={`thumb-${idx}`} />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h1>
          <div className="price-stock">
            <span className="price">$98.00</span>
            <span className="stock">In stock</span>
          </div>
          <div className="rating">
            ★★★★★ 9.3 • 32 reviews • 154 sold
          </div>

          <div className="price-tiers">
            <div className="tier">
              <span className="tier-price">$98.00</span>
              <span className="tier-qty">50-100 pcs</span>
            </div>
            <div className="tier">
              <span className="tier-price">$90.00</span>
              <span className="tier-qty">100-700 pcs</span>
            </div>
            <div className="tier">
              <span className="tier-price">$78.00</span>
              <span className="tier-qty">700+ pcs</span>
            </div>
          </div>
          <div className="info-grid">
            <div><strong>Price:</strong> Negotiable</div>
            <div><strong>Type:</strong> Classic shoes</div>
            <div><strong>Material:</strong> Plastic material</div>
            <div><strong>Design:</strong> Modern nice</div>
            <div><strong>Customization:</strong> Customized logo and design</div>
            <div><strong>Protection:</strong> Refund Policy</div>
            <div><strong>Warranty:</strong> 2 years full warranty</div>
          </div>
        </div>

        <div className="supplier-info">
          <div className="supplier-card">
            <div className="supplier-avatar">R</div>
            <h3>Supplier</h3>
            <p className="supplier-name">Guanjoi Trading LLC</p>
            <div className="supplier-location">
              <span className="flag">🇩🇪</span>
              <span>Germany, Berlin</span>
            </div>
            <p className="supplier-badge">✓ Verified Seller</p>
            <p className="supplier-shipping">🌍 Worldwide shipping</p>
            <button className="inquiry-btn">Send inquiry</button>
            <button className="profile-btn">Seller's profile</button>
            <button className="save-later-btn">♥ Save for later</button>
          </div>
        </div>
      </div>

      <div className="detail-bottom">
        <div className="tabs-area">
          <div className="tabs">
            <div className="tab-buttons">
              {['Description', 'Reviews', 'Shipping', 'About seller'].map(tab => (
                <button
                  key={tab}
                  className={activeTab === tab ? 'active' : ''}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="tab-content">
              {activeTab === 'Description' && (
                <>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <table className="desc-table">
                    <tbody>
                      <tr><td>Model</td><td>#8786867</td></tr>
                      <tr><td>Style</td><td>Classic style</td></tr>
                      <tr><td>Certificate</td><td>ISO-898921212</td></tr>
                      <tr><td>Size</td><td>34mm x 450mm x 19mm</td></tr>
                      <tr><td>Memory</td><td>36GB RAM</td></tr>
                    </tbody>
                  </table>
                  <ul className="desc-list">
                    <li>Some great feature name here</li>
                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                    <li>Duis aute irure dolor in reprehenderit</li>
                    <li>Some great feature name here</li>
                  </ul>
                </>
              )}
              {activeTab === 'Reviews' && <p>Customer reviews will appear here.</p>}
              {activeTab === 'Shipping' && <p>Shipping information goes here.</p>}
              {activeTab === 'About seller' && <p>Seller details and policies.</p>}
            </div>
          </div>
        </div>
        <aside className="you-may-like">
          <h3>You may like</h3>
          <div className="you-like-list">
            {relatedProducts.map((p, i) => (
              <RelatedCard key={i} {...p} />
            ))}
          </div>
        </aside>
      </div>

      <Footer />
      <FooterBottom />
    </div>
  );
}

export default ProductDetail;
