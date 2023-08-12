import HomePage from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{
  path:'/',
  element:<HomePage/>
}]);

function App() {
  return (
   <RouterProvider router={router}  />
  );
}

export default App;
