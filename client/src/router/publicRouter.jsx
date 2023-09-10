import { Forgot } from "../pages/auth/Forgot";
import ResetPass from "../pages/auth/ResetPass";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import PublicGard from "./PublicGard";

// creat public router
const publicRouter = [
  {
    element: <PublicGard />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgotpass", element: <Forgot /> },
      { path: "/resetpass/:token", element: <ResetPass /> },
    ],
  },
];

// export router
export default publicRouter;
