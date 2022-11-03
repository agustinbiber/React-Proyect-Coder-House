import "./CategoryButton.css";
import { Link } from "react-router-dom";
import React from "react";

const CategoryButton = (props) => {
  return (
    <Link className="category-link" to={props.destinationRoute}>
      {props.category}
    </Link>
  );
};

export default CategoryButton;