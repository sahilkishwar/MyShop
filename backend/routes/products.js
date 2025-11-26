const express = require("express");
const router = express.Router();

const products = [
  { id: 1, name: "Premium Running Shoes", price: 89.99, description: "High-performance athletic shoes with memory foam cushioning and breathable mesh upper" },
  { id: 2, name: "Classic T-Shirt", price: 24.99, description: "100% organic cotton, ultra-soft and comfortable for everyday wear" },
  { id: 3, name: "Smart Watch Pro", price: 199.99, description: "Advanced fitness tracking, heart rate monitor, and 7-day battery life" },
  { id: 4, name: "Wireless Headphones", price: 149.99, description: "Active noise cancellation, 30-hour battery, premium sound quality" },
  { id: 5, name: "Designer Sunglasses", price: 129.99, description: "UV protection, polarized lenses, lightweight titanium frames" },
  { id: 6, name: "Leather Backpack", price: 159.99, description: "Spacious design with multiple compartments and laptop sleeve" },
  { id: 7, name: "Sports Cap", price: 34.99, description: "Breathable material with adjustable strap, perfect for outdoor activities" },
  { id: 8, name: "Running Socks Pack", price: 19.99, description: "Set of 3 pairs, moisture-wicking and blister-resistant" },
  { id: 9, name: "Fitness Water Bottle", price: 44.99, description: "1L capacity, insulated, keeps drinks cold for 24 hours" },
  { id: 10, name: "Gym Duffle Bag", price: 74.99, description: "Durable polyester with ventilated shoe compartment and adjustable straps" },
];

router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
