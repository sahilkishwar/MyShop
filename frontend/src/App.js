import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

// Temporary Orders page
function Orders() {
  return <h1 className="text-2xl font-bold mt-10">Your Orders</h1>;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<HeroBanner />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
