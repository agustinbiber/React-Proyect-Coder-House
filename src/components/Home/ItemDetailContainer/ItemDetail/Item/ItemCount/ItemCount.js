/* 
 COMPONENTE ItemCount
    Este componente se encarga de solicitar al usuario la cantidad de unidades de un articulo desea agregar al carrito.
	A su vez llama al Context para cargar los elementos al carro.
	Maneja la interfaz de botones para sumar y restar elementos, y el boton para enviar los mismos al carro. A traves del useContext.
	Esta contenido dentro de ItemDetail.
*/

import { useContext, useState } from "react";
import "./ItemCount.css";
import React from "react";
import { CartContext } from "../../../../../../context/CartContext";
import { Link } from "react-router-dom";

function ItemCount(item) {
  const [contador, setContador] = useState(0);
  const { addToCart } = useContext(CartContext);

  // Funcion que maneja la resta de unidades indicadas por el cliente en contador
  const handleRest = () => {
    setContador(contador - 1);
  };

  // Funcion que maneja la suma de unidades indicadas por el cliente en contador
  const handleSum = () => {
    setContador(contador + 1);
  };

  // Funcion que genera el objeto para agregar al carro, llamando a la funcion addToCart del CartContext
  const addItemToCart = () => {
    const itemToAdd = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: contador,
    };

    addToCart(itemToAdd);
    setContador(0);   // Reseteo del contador tras guardar en el carrito
  };

  return (
    <div className="item-count">
      <p> Stock: {item.stock}</p>
      <Link to={"/"}>
        <button
          className="item-button"
          disabled={contador < 1 ? true : false}
          onClick={addItemToCart}
        >
          Agregar al carro
        </button>
      </Link>
      <button
        className="item-button"
        disabled={contador === 0 ? true : false}
        onClick={handleRest}
      >
        {" "}
        -{" "}
      </button>
      <p> {contador} </p>
      <button
        className="item-button"
        disabled={contador === item.stock ? true : false}
        onClick={handleSum}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default ItemCount;
