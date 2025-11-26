import React from "react";
import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <section className="bg-orange-100 rounded-lg p-10 text-center shadow-md">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyShop!</h1>
      <p className="text-lg mb-6">Find the best products at unbeatable prices.</p>
      <Link
        to="/products"
        className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
      >
        Shop Now
      </Link>
    </section>
  );
}

export default HeroBanner;
