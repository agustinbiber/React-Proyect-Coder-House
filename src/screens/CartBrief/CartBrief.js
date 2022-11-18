import Cart from "../../components/Home/CartBrief/Cart/Cart";
import NavBar from "../../components/UI/NavBar";
import React from "react";


export default function CartBrief() {
    
    return (
        <div>
          <NavBar />
          <div className="cart-list-container">
            <Cart>

            </Cart>
          </div>
        </div>
    );
};