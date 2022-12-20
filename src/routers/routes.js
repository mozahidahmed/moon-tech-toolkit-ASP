import { createBrowserRouter } from "react-router-dom";
import Cart from "../component/Main/Cart";
import Home from "../component/Main/Home";
import Main from "../component/Main/Main";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
     
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
     
    ],
  
 
    
  },
]);

export default routes;