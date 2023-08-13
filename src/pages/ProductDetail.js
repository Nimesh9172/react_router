import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <button><Link to=".." relative="path" >Back</Link></button>
    </Fragment>
  );
};

export default ProductDetail;
