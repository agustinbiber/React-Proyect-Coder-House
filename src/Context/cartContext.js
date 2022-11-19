import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  isInCart: () => {},
  clearCart: () => {},
  cartQuantity: 0
});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const getFromCart = (id) => {
    // Revisa si esta en cart y devuelve booleano
    return cart.find((order) => order.id === id);
  };

  const isInCart = (id) => {
    // Retorna booleano si esta en cart, revisa si es undef previamente
    return id !== undefined ? getFromCart(id) : undefined;
  };

  const addToCart = (obj) => {
    if (isInCart(obj && obj.id)) {
      alert("Elemento ya se encuentra en el carro");
      return;
    }
    const updatedCart = cart;
    updatedCart.push(obj);
    setCart(updatedCart); // Escribo variable del useState
    const newCartQuantity = updatedCart.length;
    setCartQuantity(newCartQuantity);
    return;
  }

  const clearCart = () => {
    setCart([]);
    setCartQuantity(0);
  }
  
  return (
    <CartContext.Provider value={{ cart, addToCart, isInCart, clearCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}