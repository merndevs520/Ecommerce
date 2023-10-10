import PageLayout from "../components/Layout/PageLayout";
import Brand from "../pages/Dashbord/Brand";
import Catagory from "../pages/Dashbord/Catagory";
import Home from "../pages/Dashbord/Home";
import Premition from "../pages/Dashbord/Premition";
import Product from "../pages/Dashbord/Product";
import ProductCreate from "../pages/Dashbord/ProductCreate";
import { Profile } from "../pages/Dashbord/Profile";
import Role from "../pages/Dashbord/Role";
import Tag from "../pages/Dashbord/Tag";
import User from "../pages/Dashbord/User";
import Message from "../pages/Message/Message";
import PrivateGard from "./PrivateGard";

// creat Private router
const privateRouter = [
  {
    element: <PrivateGard />,
    children: [
      {
        element: <PageLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/users", element: <User /> },
          { path: "/role", element: <Role /> },
          { path: "/permition", element: <Premition /> },
          { path: "/profile", element: <Profile /> },
          { path: "/brand", element: <Brand /> },
          { path: "/tag", element: <Tag /> },
          { path: "/catagory", element: <Catagory /> },
          { path: "/product", element: <Product /> },
          { path: "/productCreate", element: <ProductCreate /> },
          // { path: "/message", element: <Message /> },
        ],
      },
    ],
  },
];

// export router
export default privateRouter;
