import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductList.css";

// Prices are in INR (numbers). Images use direct URLs for relevant product visuals.
const products = [
  { id: 1, name: "Premium Running Shoes", price: 3999, image: process.env.PUBLIC_URL + "/images/shoes.jpg", category: "Footwear" },
  { id: 2, name: "Classic T-Shirt", price: 799, image: process.env.PUBLIC_URL + "/images/tshirt.png", category: "Apparel" },
  { id: 3, name: "Smart Watch Pro", price: 9999, image: process.env.PUBLIC_URL + "/images/watch.png", category: "Electronics" },
  { id: 4, name: "Wireless Headphones", price: 7499, image: process.env.PUBLIC_URL + "/images/headphones.jpg", category: "Electronics" },
  { id: 5, name: "Designer Sunglasses", price: 3499, image: process.env.PUBLIC_URL + "/images/sunglasses.jpg", category: "Accessories" },
  { id: 6, name: "Leather Backpack", price: 6599, image: process.env.PUBLIC_URL + "/images/backpack.jpg", category: "Bags" },
  { id: 7, name: "Sports Cap", price: 499, image: process.env.PUBLIC_URL + "/images/cap.jpg", category: "Apparel" },
  { id: 8, name: "Running Socks Pack", price: 299, image: process.env.PUBLIC_URL + "/images/socks.jpg", category: "Apparel" },
  { id: 9, name: "Fitness Water Bottle", price: 899, image: process.env.PUBLIC_URL + "/images/bottle.jpg", category: "Sports" },
  { id: 10, name: "Gym Duffle Bag", price: 2499, image: process.env.PUBLIC_URL + "/images/duffle.jpg", category: "Bags" },
];

function ProductList() {
  const { addToCart } = useContext(CartContext);
  const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });

  return (
    <div className="product-list-container">
      <div className="product-grid">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="product-card"
            style={{
              animation: `fadeIn 0.6s ease-out ${index * 0.05}s both`,
            }}
          >
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="overlay-badge">{product.category}</div>
            </div>

            <div className="product-content">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-category">{product.category}</p>
              <p className="product-price">{inr.format(product.price)}</p>

              <button
                onClick={() => addToCart(product)}
                className="btn-purchase"
              >
                <span>🛒 Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
