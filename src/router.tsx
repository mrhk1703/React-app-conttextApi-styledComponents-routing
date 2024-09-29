import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Tables } from "./components/Tables";
import { Menu } from "./components/Menu";
import { Customers } from "./components/Customers";
import { Products } from "./components/Products";
import { Home } from "./components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/tables",
        element: <Tables />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
