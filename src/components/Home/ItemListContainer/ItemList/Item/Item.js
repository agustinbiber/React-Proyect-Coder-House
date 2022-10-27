import "./Item.css";
import { Link } from "react-router-dom";

const Item = (item) => {
  return (
    <div className="item">
      <div className="item-header center-flex">
        <h1>{item.name + " " + item.model}</h1>
      </div>
      <div className="item-body center-flex">
        <div className="img-container">
          <img alt={`Articulo ${item.id}`} src={item.img} />
          <Link to={`/item/${item.id}`}>
            <button>Detalles</button>
          </Link>
        </div>
      </div>
      <div className="item-footer center-flex">
        <p>Stock: {item.stock}</p>
      </div>
    </div>
  );
};

export default Item;
