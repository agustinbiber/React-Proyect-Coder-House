/*
  COMPONENTE Items
    Es la card que contine informacion basica sobre el articulo para mostrar en el listado.
    Agrupa titulo, imagen, stock y boton para ver detalles
*/

import "./Item.css";
import { Link } from "react-router-dom";
import React from "react";

const Item = (item) => {
  return (
    <div className="item">
      <div className="item-body center-flex">
        <div className="img-container">
          <img alt={`Articulo ${item.id}`} src={item.img} />
        </div>
      </div>
      <div className="item-footer center-flex">
        <h3>{item.name}</h3>
        <Link to={`/item/${item.id}`}>
          <button>Detalles</button>
        </Link>
        <p>Stock: {item.stock}</p>
      </div>
    </div>
  );
};

export default Item;
