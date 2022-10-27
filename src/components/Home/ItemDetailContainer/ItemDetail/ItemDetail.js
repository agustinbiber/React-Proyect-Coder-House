import "./ItemDetail.css";
import ItemCount from "./Item/ItemCount/ItemCount";

const ItemDetail = (item) => {

    return (
        <div className="item-detail">
          <div className="item-detail-header center-flex">
            <h1>{item.name + " " + item.model}</h1>
          </div>
          <div className="item-detail-body">
            <h3>Descripción</h3>
            <p>{item.description}</p>
            <h3>Precio: {item.price} USD</h3>
          </div>
          <div className="item-detail-footer center-flex">
            <ItemCount stock={item.stock} />
          </div>
        </div>
      );
    };

export default ItemDetail;