import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

// Temporary Orders page
function Orders() {
  return (
    <div className="orders-page">
      <h1>Your Orders</h1>
      <p>Order history will appear here</p>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroBanner />} />
          <Route
            path="/products"
            element={
              <div className="container mx-auto px-6 py-8">
                <ProductList />
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <div className="container mx-auto px-6 py-8">
                <Cart />
              </div>
            }
          />
          <Route
            path="/orders"
            element={
              <div className="container mx-auto px-6 py-8">
                <Orders />
              </div>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
