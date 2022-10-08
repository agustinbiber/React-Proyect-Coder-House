import "./CartWidget.css";
import cartLogo from "./media/cartLogo.svg";

const CartWidget = () => {
  return (
      <a className="cart-div" href="">
        <img src={cartLogo} alt="Cart icon" />
      </a>
  );
};

export default CartWidget;