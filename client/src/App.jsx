import { RouterProvider, useNavigate } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import router from "./router/router";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { userMe } from "./features/Auth/authapiSlice";
import { useEffect } from "react";
import { CreateTost } from "./utils/toastifyAlert";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(userMe());
    }
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
        position="bottom-left"
      />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
