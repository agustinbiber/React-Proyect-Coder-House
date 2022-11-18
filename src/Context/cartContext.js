import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  isInCart: () => {},
});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([{id: 0, name: "nada", price: 12}]);

  const getFromCart = (id) => {
    // Revisa si esta en cart y devuelve booleano
    return cart.find((order) => order.id === id);
  };

  const isInCart = (id) => {
    // Retorna booleano si esta en cart, revisa si es undef previamente
    return id !== undefined ? getFromCart(id) : undefined;
  };

  const addToCart = (obj) => {
    /*if (isInCart(obj && obj.id)) {
      console.log("Elemento ya se encuentra en el carro");
      return;
    }*/
    alert(cart[0]);
    const updatedCart = cart;
    updatedCart.push(obj);
    setCart(updatedCart); // Escribo variable del useState
    alert("paso");
    return;
  }
  
  return (
    <CartContext.Provider value={{ cart, addToCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};