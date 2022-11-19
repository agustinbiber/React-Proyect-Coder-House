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
                ))

            :
                <p> Su carrito se encuentra vacio. Busque articulos en nuestra tienda y agreguelos al mismo. </p> 
        }
            </ul>
        </div>
    )
  };
  
export default Cart;