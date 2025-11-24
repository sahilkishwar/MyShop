const express = require("express");
const router = express.Router();

const products = [
  { id: 1, name: "Product 1", price: 100, description: "Description 1" },
  { id: 2, name: "Product 2", price: 200, description: "Description 2" },
  { id: 3, name: "Product 3", price: 300, description: "Description 3" },
];

router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
