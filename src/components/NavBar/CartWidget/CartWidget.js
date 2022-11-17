import "./CartWidget.css";
import cartLogo from "./media/cartLogo.svg";
import React from "react";

const CartWidget = () => {
  return (
      <a className="cart-div" href="/">
        <img src={cartLogo} alt="Cart icon" />
      </a>
  );
};

export default CartWidget;