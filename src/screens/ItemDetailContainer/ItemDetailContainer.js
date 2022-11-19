/* 
 COMPONENTE DetailContainer
    Card que contiene detalles de un producto al seleccionarlo.
    La informacion se lee de la base de datos filtrado segun el id del articulo
*/

import "./ItemDetailContainer.css";
import NavBar from "../../components/UI/NavBar";
import ItemDetail from "../../components/Home/ItemDetailContainer/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [itemDetail, setItemDetail] = useState({});

  // Efecto para verificar el item en base de datos y obtener sus atributos
  useEffect(() => {
    const dataBase = getFirestore();

    const itemRef = doc(dataBase, "ItemList", itemId);

    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        const detail = snapshot.data();
        detail.id = snapshot.id;
        setItemDetail(detail);
      }
    });
  }, [itemId]);

  return (
    <div>
      <NavBar />
      <div className="item-detail-container ">
        <ItemDetail
          id={itemDetail.id}
          name={itemDetail.name}
          stock={itemDetail.stock}
          img={itemDetail.img}
          price={itemDetail.price}
          description={itemDetail.description}
        />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
