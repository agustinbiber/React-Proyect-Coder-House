import "./ItemDetail.css";
import ItemCount from "./Item/ItemCount/ItemCount";
import React from "react";

const ItemDetail = (item) => {

    return (
        <div className="item-detail">
          <div className="item-detail-header center-flex">
            <h1>{item.name}</h1>
          </div>
          <div className="item-detail-body">
            <h3>Descripción</h3>
            <p>{item.description}</p>
            <h3>Precio: {item.price} USD</h3>
          </div>
          <div className="item-detail-footer center-flex">
              <ItemCount id={item.id} name={item.name} price={item.price}  />
          </div>
        </div>
      );
    };

export default ItemDetail;