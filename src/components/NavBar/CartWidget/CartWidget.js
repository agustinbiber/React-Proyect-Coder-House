import "./CartWidget.css";
import cartLogo from "./media/cartLogo.svg";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);
  // const cartQuantity2 = 2;
  
  return (
      <Link className="cart-div" to="/cart">
        <img src={cartLogo} alt="Cart icon" />
        <p className="cart-indicator">{cartQuantity}</p>
      </Link>
  );
};

export default CartWidget;