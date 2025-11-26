import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        ✨ MyShop
      </Link>

      {/* Menu Links */}
      <div className="navbar-menu">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/products" className="navbar-link">
          Products
        </Link>
        <Link to="/cart" className="navbar-link">
          Cart
        </Link>
        <Link to="/orders" className="navbar-link">
          Orders
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
