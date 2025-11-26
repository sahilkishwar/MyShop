import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="mt-6">
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty 🛒</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4"
            >
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              {/* Quantity buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  +
                </button>
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-gray-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <h2 className="text-xl font-bold mt-4">Total: ₹{totalPrice}</h2>

          {/* ✅ Purchase button visible only when cart has items */}
          {cart.length > 0 && (
            <button
              onClick={() => alert("Purchase successful 🎉")}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700"
            >
              Purchase Now
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
