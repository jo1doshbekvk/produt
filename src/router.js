import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./containers/Layout";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import Shop from "./pages/Shop/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
    ],
  },

  {
    path: "/admin",
    element: <Admin />,
  },
]);
