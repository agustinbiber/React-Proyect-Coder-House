import "./CartWidget.css";
import cartLogo from "./media/cartLogo.svg";
import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
      <Link className="cart-div" to="/cart">
        <img src={cartLogo} alt="Cart icon" />
      </Link>
  );
};

export default CartWidget;