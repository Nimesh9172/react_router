import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
  <Fragment>
    <MainNavigation/>
    <main>
      <h2>An error occured</h2>
      <h3>We couldn't find this page :( !!! </h3>
    </main>
  </Fragment>
  )
}

export default ErrorPage