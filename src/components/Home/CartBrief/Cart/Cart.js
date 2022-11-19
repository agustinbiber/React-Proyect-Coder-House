/* 
 COMPONENTE CART
    Crea listado de los elementos contenidos en el cart en caso de que hayan, a traves del metodo .map.
    Presenta informacion sobre el pedido.
    Esta contenido dentro de Cart Brief.
    En caso de no haber elementos en el carrito nos avisa y nos permite regresar al home.
*/

import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

const Cart = () => {

    const { cart } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de compras</h2>
            <ul>
            {cart.length > 0 ? 
                cart.map((itemElement) => (
                        <li key={itemElement.id}>
                            Articulo: {itemElement.name} - Precio: {itemElement.price} USD - Cantidad: {itemElement.quantity} unidades
                        </li>
                    )
                )
            :
                <p> Su carrito se encuentra vacio. Busque articulos en nuestra tienda y agreguelos al mismo. </p> 
            }
            </ul>
        </div>
    )
  };
  
export default Cart;