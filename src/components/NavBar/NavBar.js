import amazoffPageLogo from "../../logos/logo_transparent.png";
import CategoryButton from "./CategoryButton/CategoryButton";
import CartWidget from "./CartWidget/CartWidget";

import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="nav-bar">
      <img
        src={amazoffPageLogo}
        className="page-logo"
        alt="Amazoff page logo"
      />
      <nav className="nav-category-btn">
        <CategoryButton category="Oficina" />
        <CategoryButton category="Electrónica" />
        <CategoryButton category="Fotografía" />
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
