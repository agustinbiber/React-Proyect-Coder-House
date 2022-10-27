import "./ItemListContainer.css";
import ItemList from "../../components/Home/ItemListContainer/ItemList/ItemList";
import NavBar from "../../components/UI/NavBar";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const {categoryId} = useParams();

  return (
    <div>
      <NavBar />
      <div className="item-list-container">
        <ItemList category={categoryId}/>
      </div>
    </div>
  );
};

export default ItemListContainer;