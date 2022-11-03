import "./ItemList.css";
import Item from "./Item/Item";
import itemsApi from "../../../../APIrest/itemsApi";
import { useEffect, useState } from "react";
import React from "react";

const ItemList = (props) => {
  const [items, setItems] = useState([]);

  const getItems = () => {
    setTimeout(() => {
      const itemsObject = itemsApi;
      setItems(itemsObject);
    }, 2000);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="item-list">
      {props.category ? items
      .filter( item => item.category === props.category).map((element, i) => (
        <Item
          id={element.id}
          name={element.brand}
          model={element.model}
          stock={element.stock}
          img={element.img[0]}
        />
      ))
    :
    items
    .map((element, i) => (
      <Item
        id={element.id}
        name={element.brand}
        model={element.model}
        stock={element.stock}
        img={element.img[0]}
      />
    ))
    }
    </div>
  );
};

export default ItemList;
