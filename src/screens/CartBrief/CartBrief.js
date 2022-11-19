import "./CartBrief.css"
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

export default function CartBrief() {
  
  const { cart, clearCart } = useContext(CartContext);
  const [costumerName, setCostumerName] = useState("");
  const [costumerPhone, setCostumerPhone] = useState("");
  const [costumerEmail, setCostumerEmail] = useState("");

  const handlePhoneInput = (event) => {
    /[0-9]$/.test(event.target.value) && setCostumerPhone(event.target.value)
  }

  const sendOrder = () => {

    const orderToSend = {
      name: costumerName,
      phone: costumerPhone,
      email: costumerEmail,
      items: cart,
      total: 0
    }

    if (costumerName !== "" && costumerPhone !== "" && costumerEmail !== "") {

      const dataBase = getFirestore();
      const ordersCollection = collection(dataBase, "OrdersCollection");
      
      alert(costumerName);

      cart.forEach( (cartElement) => {
        const itemRef = doc(dataBase, "ItemList", cartElement.id);
        getDoc(itemRef).then( (snapshot) => {
          if (snapshot.exists()) {
            const itemFromDataBase = snapshot.data();
            orderToSend.total = orderToSend.total + cartElement.price*cartElement.quantity;
            if ( ( itemFromDataBase.stock >= cartElement.quantity) ) {
              const newStock = itemFromDataBase.stock - cartElement.quantity;
              updateDoc(itemRef, {stock: newStock});
              addDoc(ordersCollection, orderToSend);
            }
        }
        })
      })

      // Reseteo Form
      setCostumerName("");
      setCostumerPhone("");
      setCostumerEmail("");

      // Limpio el Cart
      clearCart();

      //Vuelo a home
    } else {
      alert("Datos incorrectos, revise el formulario");
    }
}

  return (
    <div>
      <NavBar />
      <div className="cart-list-container">
        <Cart></Cart>
        {cart.length > 0 ? (
          <div className="cart-brief-div">
            <form className="cart-brief-form">
              <h3>Datos personales</h3>
              <p>Por favor complete el siguiente formulario para finalizar su orden, nos contactaremos con ustedes para coordinar la entrega y las formas de pago</p>
              <label for="customerName">Nombre: </label>
              <input id="customerName" name="costumerName" type="text" value={costumerName} onChange={ (event) => setCostumerName(event.target.value)}></input>

              <label for="costumerPhone">Telefono: </label>
              <input id="costumerPhone" name="costumerPhone" type="text" value={costumerPhone} onChange={ (event) => handlePhoneInput(event)}></input>

              <label for="customerEmail">E-mail: </label>
              <input id="costumerEmail" name="costumerEmail" type="email" value={costumerEmail} onChange={ (event) => setCostumerEmail(event.target.value)}></input>
              
              <div className="order-buttons">
                <button className="cart-brief-button1" type="button" onClick={sendOrder}>Finalizar Compra</button>
                <button className="cart-brief-button1" tyoe="button" onClick={clearCart}>Vaciar carrito</button>
              </div>

            </form>
          </div>
        ) : (
          <Link to={"/"}>
            <button className="cart-brief-button2" type="button">Regresar</button>
          </Link>
        )}
      </div>
    </div>
  );
}
