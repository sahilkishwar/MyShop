import React, { useContext } from "react";
import shoesImg from "../assets/shoes.png";
import tshirtImg from "../assets/tshirt.png";
import watchImg from "../assets/watch.png";
import { CartContext } from "../context/CartContext";
import "./ProductList.css";

// Product List with diverse items
const products = [
  { id: 1, name: "Premium Running Shoes", price: "$89.99", image: shoesImg, category: "Footwear" },
  { id: 2, name: "Classic T-Shirt", price: "$24.99", image: tshirtImg, category: "Apparel" },
  { id: 3, name: "Smart Watch Pro", price: "$199.99", image: watchImg, category: "Electronics" },
  { id: 4, name: "Wireless Headphones", price: "$149.99", image: watchImg, category: "Electronics" },
  { id: 5, name: "Designer Sunglasses", price: "$129.99", image: shoesImg, category: "Accessories" },
  { id: 6, name: "Leather Backpack", price: "$159.99", image: tshirtImg, category: "Bags" },
  { id: 7, name: "Sports Cap", price: "$34.99", image: watchImg, category: "Apparel" },
  { id: 8, name: "Running Socks Pack", price: "$19.99", image: shoesImg, category: "Apparel" },
  { id: 9, name: "Fitness Water Bottle", price: "$44.99", image: tshirtImg, category: "Sports" },
  { id: 10, name: "Gym Duffle Bag", price: "$74.99", image: watchImg, category: "Bags" },
];

function ProductList() {
  const { addToCart } = useContext(CartContext);

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
              <p className="product-price">{product.price}</p>

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
