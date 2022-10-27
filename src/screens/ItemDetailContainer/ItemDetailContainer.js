import "./ItemDetailContainer.css";
import NavBar from "../../components/UI/NavBar";
import ItemDetail from "../../components/Home/ItemDetailContainer/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import itemsApi from "../../APIrest/itemsApi";

//import { getItemById } from "../../APIrest/itemsApi";
//import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
//  const [item, setItem] = useState({});
//  const itemSelected = itemsApi.filter(item => item.id === itemId);

//  useEffect( () => {
//    setItem(getItemById(itemId))
//  }, []);

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
};

export default ItemDetailContainer;
