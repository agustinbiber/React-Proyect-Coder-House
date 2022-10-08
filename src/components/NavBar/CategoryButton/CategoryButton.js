import "./CategoryButton.css";

const CategoryButton = (props) => {
  return (
    <a className="category-link" href="">
      {props.category}
    </a>
  );
};

export default CategoryButton;