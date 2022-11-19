/* 
 COMPONENTE CartContext
    Context para trabajar con variables y funciones globales en varios componentes de la aplicacion.
    Especialmente para el manejo del cart y el envio de ordenes de compra.
*/

import { createContext, useState } from "react";
import React from "react";

import toast, { Toaster } from "react-hot-toast";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  isInCart: () => {},
  clearCart: () => {},
  cartQuantity: 0,
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
      toast("Elemento ya se encuentra en el carro, busque otros articulos");
      return;
    }
    const updatedCart = cart;
    updatedCart.push(obj);
    setCart(updatedCart); // Escribo variable del useState
    const newCartQuantity = updatedCart.length;
    setCartQuantity(newCartQuantity);
    toast("El articulo se agrego con exito al carrito !!");
    return;
  };

  const clearCart = () => {
    setCart([]);
    setCartQuantity(0);
    toast("Usted vacio su carrito con exito.");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, isInCart, clearCart, cartQuantity }}
    >
      {children}
      <Toaster />
    </CartContext.Provider>
  );
}
