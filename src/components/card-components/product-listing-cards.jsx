import React from 'react';
import { Link } from 'react-router-dom';
import './product-listing-cards.css';
import iphoneImage from '../../assets/assets2/Image/tech/iphone.png';
import mobileImage from '../../assets/assets2/Image/tech/mobile.png';
import laptopImage from '../../assets/assets2/Image/tech/laptop.png';
import cameraImage from '../../assets/assets2/Image/tech/camera.png';
import watchImage from '../../assets/assets2/Image/tech/watch.png';
import headphoneImage from '../../assets/assets2/Image/tech/headphone2.png';
import headphoneAlt from '../../assets/assets2/Image/tech/headphone.png';
import jugImage from '../../assets/assets2/Image/tech/jug.png';
import tabletImage from '../../assets/assets2/Image/tech/tablet.png';
const ProductListingCards = () => {
  const products = [
    {
      image: iphoneImage,
      title: 'iPhone 15 Pro Max, 256GB, Black',
      price: '$1,199.00',
      originalPrice: '$1,299.00',
      rating: 8.5,
      orders: '245 orders',
      shipping: 'Free Shipping',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      image: mobileImage,
      title: 'Android Smartphone X',
      price: '$998.00',
      originalPrice: '$1,198.00',
      rating: 7.5,
      orders: '154 orders',
      shipping: 'Free Shipping',
      description: 'US enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      image: laptopImage,
      title: 'Gaming Laptop Ultra',
      price: '$1,499.00',
      originalPrice: '$1,699.00',
      rating: 9.0,
      orders: '320 orders',
      shipping: 'Free Shipping',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
    },
    {
      image: cameraImage,
      title: 'GoPro HERO6 4K Action Camera - Black',
      price: '$998.00',
      originalPrice: '$1,198.00',
      rating: 7.5,
      orders: '154 orders',
      shipping: 'Free Shipping',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      image: watchImage,
      title: 'Smart Watch Series 5',
      price: '$299.00',
      originalPrice: '$349.00',
      rating: 8.0,
      orders: '210 orders',
      shipping: 'Free Shipping',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
    },
    {
      image: headphoneImage,
      title: 'Noise Cancelling Headphones',
      price: '$199.00',
      originalPrice: '$249.00',
      rating: 8.2,
      orders: '180 orders',
      shipping: 'Free Shipping',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores'
    },
    {
      image: headphoneAlt,
      title: 'Wireless Earbuds Pro',
      price: '$149.00',
      originalPrice: '$179.00',
      rating: 7.8,
      orders: '120 orders',
      shipping: 'Free Shipping',
      description: 'Rechargeable earbuds with superior sound and comfort'
    },
    {
      image: jugImage,
      title: 'Stylish Tech Jug',
      price: '$49.00',
      originalPrice: '$59.00',
      rating: 6.5,
      orders: '85 orders',
      shipping: 'Free Shipping',
      description: 'A quirky accessory for your tech desk'
    },
    {
      image: tabletImage,
      title: 'Premium Tablet Plus',
      price: '$649.00',
      originalPrice: '$749.00',
      rating: 8.9,
      orders: '300 orders',
      shipping: 'Free Shipping',
      description: 'High-resolution display tablet for work and play'
    },
  ];

  const [viewMode, setViewMode] = React.useState('grid');
  const [verifiedOnly, setVerifiedOnly] = React.useState(false);

  function ProductCard({ product }) {
    const [isFav, setIsFav] = React.useState(false);

    return (
      <div className="product-card-item">
        <button
          className={`favorite-btn ${isFav ? 'active' : ''}`}
          onClick={() => setIsFav(!isFav)}
        >
          <i className="fa fa-heart"></i>
        </button>
        <div className="card-image-wrapper">
          <img src={product.image} alt={product.title} className="card-image" />
        </div>
        <div className="card-body">
          <h3 className="card-title">{product.title}</h3>
          <div className="price-section">
            <span className="price">{product.price}</span>
            <span className="original-price">{product.originalPrice}</span>
          </div>
          <div className="rating-section">
            <div className="stars">
              <span className="star-rating">★★★★★ {product.rating}</span>
            </div>
            <span className="orders-count">{product.orders}</span>
            <div className="shipping-badge">{product.shipping}</div>
          </div>
          <p className="description">{product.description}</p>
          <Link to="/product-detail" className="view-details">View details</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-listing-container">
      <div className="products-header">
        <div className="header-left">
          <span className="product-count">
            {products.length} item{products.length !== 1 ? 's' : ''} in Mobile accessory
          </span>
        </div>
        <div className="header-right">
          <label className="checkbox-label">
            <input type="checkbox" checked={verifiedOnly} onChange={(e) => setVerifiedOnly(e.target.checked)} />
            <span>Verified only</span>
          </label>
          <select className="sort-select" defaultValue="featured">
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
          <button 
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <i className="fa fa-th"></i>
          </button>
          <button 
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>

      <div className={`product-cards-grid ${viewMode}`}>   {/* add viewMode class */}
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingCards;
