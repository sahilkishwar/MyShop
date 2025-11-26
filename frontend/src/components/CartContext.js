// frontend/src/context/CartContext.js
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // add product -> if exists increase quantity, otherwise add with quantity:1
  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      // ensure price is numeric
      const price = typeof product.price === "string"
        ? Number(String(product.price).replace(/[^0-9.-]+/g, "")) || 0
        : Number(product.price) || 0;
      return [...prev, { ...product, quantity: 1, price }];
    });
  }

  function increaseQty(id) {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)));
  }

  function decreaseQty(id) {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity > 1 ? p.quantity - 1 : 1 } : p
      )
    );
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  const totalPrice = cart.reduce((s, item) => s + (Number(item.price) || 0) * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
