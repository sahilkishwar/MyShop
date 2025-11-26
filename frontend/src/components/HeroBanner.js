import React from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css";
import shoesImg from "../assets/shoes.png";
import tshirtImg from "../assets/tshirt.png";
import watchImg from "../assets/watch.png";

function HeroBanner() {
  return (
    <div className="hero-section">
      {/* Main Hero */}
      <section className="hero-main">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MyShop</h1>
          <p className="hero-subtitle">Discover premium products at unbeatable prices</p>
          <p className="hero-description">
            Your one-stop destination for quality fashion, electronics, and sports gear
          </p>
          <Link to="/products" className="hero-button">
            🛍️ Shop Now
          </Link>
        </div>
        <div className="hero-images">
          <div className="hero-image-card card-1">
            <img src={shoesImg} alt="Premium Shoes" />
          </div>
          <div className="hero-image-card card-2">
            <img src={watchImg} alt="Smart Watch" />
          </div>
          <div className="hero-image-card card-3">
            <img src={tshirtImg} alt="T-Shirt" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Shop With Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Shipping</h3>
            <p>Quick delivery to your doorstep with real-time tracking</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💯</div>
            <h3>Premium Quality</h3>
            <p>Authentic products from trusted brands and suppliers</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payment</h3>
            <p>Multiple payment options with SSL encryption</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">↩️</div>
            <h3>Easy Returns</h3>
            <p>30-day money-back guarantee, no questions asked</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon">👟</div>
            <h3>Footwear</h3>
            <p>Premium shoes and sneakers</p>
          </div>
          <div className="category-card">
            <div className="category-icon">👕</div>
            <h3>Apparel</h3>
            <p>Trendy clothing and accessories</p>
          </div>
          <div className="category-card">
            <div className="category-icon">⌚</div>
            <h3>Electronics</h3>
            <p>Latest tech gadgets</p>
          </div>
          <div className="category-card">
            <div className="category-icon">🎒</div>
            <h3>Bags</h3>
            <p>Stylish bags for every occasion</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to find your perfect items?</h2>
        <p>Browse our extensive collection now</p>
        <Link to="/products" className="cta-button">
          Explore Products →
        </Link>
      </section>
    </div>
  );
}

export default HeroBanner;
