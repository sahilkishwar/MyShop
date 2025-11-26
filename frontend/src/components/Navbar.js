import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-orange-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold hover:text-yellow-300 transition"
      >
        MyShop
      </Link>

      {/* Menu Links */}
      <div className="space-x-6">
        <Link
          to="/"
          className="hover:text-yellow-300 relative after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:transition after:origin-left"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="hover:text-yellow-300 relative after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:transition after:origin-left"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="hover:text-yellow-300 relative after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:transition after:origin-left"
        >
          Cart
        </Link>
        <Link
          to="/orders"
          className="hover:text-yellow-300 relative after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:transition after:origin-left"
        >
          Orders
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
