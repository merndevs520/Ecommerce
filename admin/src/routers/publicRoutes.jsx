import { createBrowserRouter } from "react-router-dom";
import ShopSingle from "../pages/shop/singleshop/ShopSingle";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Layouts from "../layouts/Layouts";
import Account from "../pages/account/Account";
import Card from "../pages/card/Card";
import Checkout from "../pages/checkout/Checkout";

export const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/:id", element: <ShopSingle /> },
      { path: "/account", element: <Account /> },
      { path: "/card", element: <Card /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);
