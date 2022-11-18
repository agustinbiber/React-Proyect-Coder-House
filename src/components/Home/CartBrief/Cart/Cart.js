import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

const Cart = () => {

    const { cart } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de compras</h2>
            <p>{cart[0].name}</p>
        </div>
    )
  };
  
export default Cart;