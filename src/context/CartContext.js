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
  cartTotal: 0
});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal ] = useState(0);

  // Funcion para revisar si esta en cart y devuelve id
  const getFromCart = (id) => {
    return cart.find((order) => order.id === id);
  };
  
  // Funcion que verifica si un articulo ya se encuentra en el carro y devuelve booleano, revisa si es undef
  const isInCart = (id) => {
    return id !== undefined ? getFromCart(id) : undefined;
  };

  // Funcion para agregar un objecto con la informacion del articulo al carro
  const addToCart = (obj) => {
    if (isInCart(obj && obj.id)) {
      toast("Elemento ya se encuentra en el carro, busque otros articulos");
      return;
    }
    const updatedCart = cart;
    updatedCart.push(obj);
    setCart(updatedCart);                         // Escribo variable del useState
    const newCartQuantity = updatedCart.length;   // Actualizo cantidad de items distintos que contiene el carro
    setCartQuantity(newCartQuantity);             // Guardo en el useState
    toast("El articulo se agrego con exito al carrito !!");     // Notificacion
    const newCartTotal = cartTotal + obj.price*obj.quantity;
    setCartTotal(newCartTotal);
    return;
  };

  

  // Funcion para vaciar el carro
  const clearCart = () => {
    setCart([]);
    setCartQuantity(0);
    setCartTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, isInCart, clearCart, cartQuantity, cartTotal }}
    >
      {children}
      <Toaster />
    </CartContext.Provider>
  );
}
