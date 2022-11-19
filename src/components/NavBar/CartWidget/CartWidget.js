/* 
 COMPONENTE CartWidget
    Es el widget con el simbolo del carrito.
    Se inicializa en cero porque no tenemos elementos en el carro.
    A medida que agregamos el numero nos muestra la cantidad de elementos distintos que tenemos.
*/

import "./CartWidget.css";
import cartLogo from "./media/cartLogo.svg";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);   // Utilizo el CartContext para ver la cantidad de unidades que contiene el carrito

  return (
    <Link className="cart-div" to="/cart">
      <img src={cartLogo} alt="Cart icon" />
      <p className="cart-indicator">{cartQuantity}</p>
    </Link>
  );
};

export default CartWidget;
