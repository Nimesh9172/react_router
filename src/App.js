import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Product from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
// const routeDefinitions  = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>} />
//     <Route path="/product" element={<Product/>} />
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
