/*
  COMPONENTE ItemList
  Obtiene los items desde la base de datos
  Mapea la coleccion y presenta cada articulo mediante el componente item
  Tambien organiza articulos segun las distintas categorias
*/

import "./ItemList.css";
import Item from "./Item/Item";
import { useEffect, useState } from "react";
import React from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const ItemList = (props) => {
  const [items, setItems] = useState([]);

  // Obtengo de Firebase todo el listado de articulos
  useEffect(() => {
    const itemsArray = [];

    const dataBase = getFirestore();

    const itemCollectionRef = collection(dataBase, "ItemList");

    getDocs(itemCollectionRef).then((snapshot) => {
      snapshot.docs.map((doc) => {
        const itemsElement = doc.data();
        itemsElement.id = doc.id;
        itemsArray.push(itemsElement);
        setItems(itemsArray);
        return null;
      });
    });
  }, []);

  return (
    <div className="item-list">
      {props.category
        ? items
            .filter((item) => item.category === props.category)
            .map((element, i) => (
              <Item
                key={element.id}
                id={element.id}
                name={element.name}
                stock={element.stock}
                img={element.img}
              />
            ))
        : items.map((element) => (
            <Item
              key={element.id}
              id={element.id}
              name={element.name}
              stock={element.stock}
              img={element.img}
            />
          ))}
    </div>
  );
};

export default ItemList;
