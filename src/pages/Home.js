import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate('/product')
  }


  return (
    <Fragment>
      <h1>This is home page.</h1>
      <button onClick={navigateHandler}>Navigate To Prouct Page</button>
    </Fragment>
  );
};

export default HomePage;
