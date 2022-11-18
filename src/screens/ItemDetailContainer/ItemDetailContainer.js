import "./ItemDetailContainer.css";
import NavBar from "../../components/UI/NavBar";
import ItemDetail from "../../components/Home/ItemDetailContainer/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore, } from "firebase/firestore";

//import { getItemById } from "../../APIrest/itemsApi";
//import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
//  const [item, setItem] = useState({});
//  const itemSelected = itemsApi.filter(item => item.id === itemId);

//  useEffect( () => {
//    setItem(getItemById(itemId))
//  }, []);

  const [itemDetail, setItemDetail ] = useState({});
/*
  useEffect(() => {
    const dataBase = getFirestore();

    const id = parseInt(itemId);
    const reference = query(collection(dataBase, "ItemList"), where("id", "==", id) );

    getDocs(reference).then(
      (snpashot) => {
        snpashot.docs.map((doc) => {
            setItemDetail(doc.data());
            return null;  // Para evitar error en consola
          }
        )
      }
    )
  }, []);
  */

  useEffect(() => {

    const dataBase = getFirestore();

    const itemRef = doc(dataBase, "ItemList", itemId);

    getDoc(itemRef).then( (snapshot) => {
      if (snapshot.exists() ) {
        const detail = snapshot.data();
        detail.id = snapshot.id;
        setItemDetail(detail);
      }
    });
  }, []);
  
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


/*

  return (
    <div>
      <NavBar />
      <div className="item-detail-container ">
        {itemsApi
          .filter(item => item.id === parseInt(itemId))
          .map((element, i) => (
            <ItemDetail
              id={element.id}
              name={element.brand}
              model={element.model}
              stock={element.stock}
              img={element.img[0]}
              price={element.price}
              description={element.description}
            />
          ))}
      </div>
    </div>
  );

  */