import "./ItemListContainer.css";

const ItemListContainer = (greeting) => {
    return (
        <div className="item-list-container">
            {greeting.message}
        </div>
    );
};

export default ItemListContainer;