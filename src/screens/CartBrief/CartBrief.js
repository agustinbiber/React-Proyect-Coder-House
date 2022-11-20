/* 
 COMPONENTE CartBrief
    Contenedor del resumen de compra.
    A su vez maneja el formulario para el ingreso de los datos del comprador.
    Y el envio de las ordenes de compra al la base de datos, asi como la actualizacion del stock.
*/

import "./CartBrief.css";
import Cart from "../../components/Home/CartBrief/Cart/Cart";
import NavBar from "../../components/UI/NavBar";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

export default function CartBrief() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);
  const [costumerName, setCostumerName] = useState("");
  const [costumerPhone, setCostumerPhone] = useState("");
  const [costumerEmail, setCostumerEmail] = useState("");

  // Solo permite ingresar numero en el input de telefono del cliente
  const handlePhoneInput = (event) => {
    /[0-9]$/.test(event.target.value) && setCostumerPhone(event.target.value);
  };

  const eraseCart = () => {
    clearCart();
    toast("Usted vacio su carrito con exito.");
  };

  // Funcion para guardar en la data base la orden de compra y actulizar el stock restante de los articulos comprados
  const sendOrder = () => {
    const orderToSend = {
      name: costumerName,
      phone: costumerPhone,
      email: costumerEmail,
      items: cart,
      total: 0,
    };

    var total = 0;

    // Verificacion de datos del form - Basica pero se puede complejizar
    if (costumerName !== "" && costumerPhone !== "" && costumerEmail !== "") {
      const dataBase = getFirestore();
      const ordersCollection = collection(dataBase, "OrdersCollection");

      // Reviso cada elemento de carro, verifico existencia y actulizo stock
      cart.forEach((cartElement) => {
        const itemRef = doc(dataBase, "ItemList", cartElement.id);
        getDoc(itemRef).then((snapshot) => {
          if (snapshot.exists()) {
            const itemFromDataBase = snapshot.data();

            total = total + cartElement.price * cartElement.quantity;

            if (itemFromDataBase.stock >= cartElement.quantity) {
              const newStock = itemFromDataBase.stock - cartElement.quantity;
              updateDoc(itemRef, { stock: newStock }); // Actualizo stock
            }
          }
        });
      });

      // Envio orden de compra a data base
      orderToSend.total = cartTotal;
      addDoc(ordersCollection, orderToSend);

      toast(
        "Hemos recibido su pedido con exito, nuestro personal se comunicara con usted para el pago y la entrega de sus productos."
      );

      // Reseteo Form
      setCostumerName("");
      setCostumerPhone("");
      setCostumerEmail("");

      // Limpio el Cart
      clearCart();
    } else {
      toast(
        "Datos incorrectos, por favor revise el formulario y vuelva a intentarlo"
      );
    }
  };

  return (
    <div>
      <NavBar />
      <div className="cart-list-container">
        <Cart></Cart>
        {cart.length > 0 ? (
          <div>
            <h4>Total a pagar {cartTotal} USD</h4>
            <div className="cart-brief-div">
              <form className="cart-brief-form">
                <h3>Datos personales</h3>
                <p>
                  Por favor complete el siguiente formulario para finalizar su
                  orden, nos contactaremos con ustedes para coordinar la entrega
                  y las formas de pago
                </p>
                <label for="customerName">Nombre: </label>
                <input
                  id="customerName"
                  name="costumerName"
                  type="text"
                  value={costumerName}
                  onChange={(event) => setCostumerName(event.target.value)}
                ></input>

                <label for="costumerPhone">Telefono: </label>
                <input
                  id="costumerPhone"
                  name="costumerPhone"
                  type="text"
                  value={costumerPhone}
                  onChange={(event) => handlePhoneInput(event)}
                ></input>

                <label for="customerEmail">E-mail: </label>
                <input
                  id="costumerEmail"
                  name="costumerEmail"
                  type="email"
                  value={costumerEmail}
                  onChange={(event) => setCostumerEmail(event.target.value)}
                ></input>

                <div className="order-buttons">
                  <button
                    className="cart-brief-button1"
                    type="button"
                    onClick={sendOrder}
                  >
                    Finalizar Compra
                  </button>
                  <button
                    className="cart-brief-button1"
                    tyoe="button"
                    onClick={eraseCart}
                  >
                    Vaciar carrito
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <Link to={"/"}>
            <button className="cart-brief-button2" type="button">
              Regresar
            </button>
          </Link>
        )}
      </div>
      <Toaster />
    </div>
  );
}
