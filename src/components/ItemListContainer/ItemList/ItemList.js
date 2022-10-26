import "./ItemList.css";
import Item from "./Item/Item";
import itemsApi from "../../../itemsApi/itemsApi";

const ItemList = () => {
  return (
    <div className="item-list">
      {itemsApi.map(element => (
        <Item
          name={element.brand}
          model={element.model}
          stock={element.stock}
          img={element.img[0]}
        />
      ))}
    </div>
  );
};

export default ItemList;
