/* 
 COMPONENTE NavBar
  Componente para la barrra de navegacion del sitio.
  Tambien contiene el logo de la pagina y el cart widget.
  Se utiliza de molde entre los distintos componentes.
*/

import amazoffPageLogo from "../../logos/logo_transparent.png";
import CategoryButton from "../NavBar/CategoryButton/CategoryButton";
import CartWidget from "../NavBar/CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";
import React from "react";

const NavBar = () => {
  return (
    <header className="nav-bar">
      <Link to="/" className="page-logo">
        <img
          src={amazoffPageLogo}
          className="page-logo"
          alt="Amazoff page logo"
        />
      </Link>
      <nav className="nav-category-btn">
        <CategoryButton
          category="Fotografía"
          destinationRoute="/category/photography"
        />
        <CategoryButton category="Audio" destinationRoute="/category/audio" />
        <CategoryButton
          category="Accesorios"
          destinationRoute="/category/accesories"
        />
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;