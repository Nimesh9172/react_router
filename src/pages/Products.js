import { Fragment } from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, title: "Product - 1" },
  { id: 2, title: "Product - 2" },
  { id: 3, title: "Product - 3" },
];

const Product = () => {
  return (
    <Fragment>
      <h1>This is the product page</h1>
      <ul>
        {PRODUCTS.map(prod => (
          <li key={prod.id} ><Link to={`/product/${prod.id}`} >{prod.title}</Link></li>
        ) )}
      </ul>
    </Fragment>
  );
};

export default Product;
