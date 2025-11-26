import React, { useContext } from "react";
import shoesImg from "../assets/shoes.png";
import tshirtImg from "../assets/tshirt.png";
import watchImg from "../assets/watch.png";
import { CartContext } from "../context/CartContext";

// Product List
const products = [
  { id: 1, name: "Shoes", price: "$50", image: shoesImg },
  { id: 2, name: "T-Shirt", price: "$20", image: tshirtImg },
  { id: 3, name: "Watch", price: "$100", image: watchImg },
];

function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-contain mb-4"
          />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mb-3">{product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition"
          >
            Purchase
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
