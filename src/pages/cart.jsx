import React from "react";
import NavBar from "../components/nav-bar";
import Category from "../components/category";
import Footer from "../components/footer";
import FooterBottom from "../components/footer-bottom";

import iphoneImage from "../assets/assets2/Image/tech/iphone.png";
import mobileImage from "../assets/assets2/Image/tech/mobile.png";
import laptopImage from "../assets/assets2/Image/tech/laptop.png";
import watchImage from "../assets/assets2/Image/tech/watch.png";
import "./cart.css";

function Cart() {
  const cartItems = [
    {
      id: 1,
      image: mobileImage,
      title: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: "$78.99",
      qty: 9,
    },
    {
      id: 2,
      image: watchImage,
      title: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Best factory LLC",
      price: "$39.00",
      qty: 3,
    },
    {
      id: 3,
      image: laptopImage,
      title: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: "$170.50",
      qty: 1,
    },
  ];

  const savedItems = [
    {
      id: 1,
      image: iphoneImage,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: "$99.50",
    },
    {
      id: 2,
      image: mobileImage,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: "$99.50",
    },
    {
      id: 3,
      image: watchImage,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: "$99.50",
    },
    {
      id: 4,
      image: laptopImage,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: "$99.50",
    },
  ];

  function CartItem({ item }) {
    return (
      <div className="cart-item">
        <div className="item-left">
          <img src={item.image} alt={item.title} />
          <div className="item-desc">
            <h4>{item.title}</h4>
            <p>Size: {item.size}, Color: {item.color}, Material: {item.material}</p>
            <p>Seller: {item.seller}</p>
            <button className="remove-btn">Remove</button>
            <button className="save-btn">Save for later</button>
          </div>
        </div>
        <div className="item-right">
          <span className="item-price">{item.price}</span>
          <select className="qty-select" defaultValue={item.qty}>
            {[...Array(10).keys()].map(i => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  function SavedCard({ product }) {
    return (
      <div className="saved-card">
        <img src={product.image} alt={product.title} />
        <div className="saved-info">
          <span className="saved-price">{product.price}</span>
          <p className="saved-title">{product.title}</p>
          <button className="move-btn">Move to cart</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <NavBar />
      <Category />
      <div className="breadcrumb">Home &gt; Cart</div>
      <div className="cart-container">
        <section className="cart-left">
          <h2>My cart ({cartItems.length})</h2>
          {cartItems.map(i => (
            <CartItem key={i.id} item={i} />
          ))}
          <div className="cart-actions">
            <button className="back-btn">← Back to shop</button>
            <button className="remove-all-btn">Remove all</button>
          </div>
          <div className="cart-info-icons">
            <div className="icon-row">
              <span>🔒</span>
              <div>
                <strong>Secure payment</strong>
                <div>Have you ever finally just</div>
              </div>
            </div>
            <div className="icon-row">
              <span>💬</span>
              <div>
                <strong>Customer support</strong>
                <div>Have you ever finally just</div>
              </div>
            </div>
            <div className="icon-row">
              <span>🚚</span>
              <div>
                <strong>Free delivery</strong>
                <div>Have you ever finally just</div>
              </div>
            </div>
          </div>
          <div className="saved-for-later">
            <h3>Saved for later</h3>
            <div className="saved-list">
              {savedItems.map(p => (
                <SavedCard key={p.id} product={p} />
              ))}
            </div>
          </div>
          <div className="promo-banner">
            <div className="promo-text">
              <strong>Super discount on more than 100 USD</strong>
              <span>Have you ever finally just write dummy info</span>
            </div>
            <button className="promo-btn">Shop now</button>
          </div>
        </section>
        <aside className="cart-right">
          <div className="coupon">
            <input type="text" placeholder="Have a coupon?" />
            <button>Apply</button>
          </div>
          <div className="summary">
            <div className="row">
              <span>Subtotal:</span>
              <span>$1403.97</span>
            </div>
            <div className="row">
              <span>Discount:</span>
              <span className="discount">- $60.00</span>
            </div>
            <div className="row">
              <span>Tax:</span>
              <span className="tax">+ $14.00</span>
            </div>
            <div className="row total">
              <span>Total:</span>
              <span>$1357.97</span>
            </div>
            <button className="checkout-btn">Checkout</button>
            <div className="payment-icons">
              <span>💳</span><span>💳</span><span>💳</span><span>💳</span>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default Cart;