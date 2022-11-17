import { createContext, useState } from "react";

const cartContext = React.createContext([]);

// Tengo que importarlo como provider la App o la home

export default function CartProvider({ defaultaValue = [], children }) {
  const [cart, setCart] = useState(defaultaValue);

  function getFromCart(id) {
    return cart.find(obj => obj.id === id);
  }

  function isInCart(id) {
    return id === undefinded ? undefinded : getFrom !== undefined;
  }

  function addToCart(obj) {
    if ( isInCart (obj && obj.id )) {
        console.log("Wont add to cart");
        return;
    }
    setCart([...cart, obj]);
  }

/*
    addItem(item, quantity)
    removeItem(itemId)
    clear()
    isInCart(id) // true false
*/

  return (
    <cartContext.Provider
      value={{ cart, addToCart, isInCart, cartSize: cart.length }}
    >
      {children}
    </cartContext.Provider>
  );
}
