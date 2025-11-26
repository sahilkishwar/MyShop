import React, { useState } from "react";

function ProductSearch({ products }) {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="my-6">
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-800 text-black dark:text-white 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative group p-4 bg-white dark:bg-gray-700 rounded-xl shadow 
                       transform transition duration-300 hover:scale-105 hover:shadow-2xl 
                       hover:z-10"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-3 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSearch;
