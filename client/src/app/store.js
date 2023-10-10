import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import adminReducer from "../features/Admin/adminSlice";
import productReducer from "../features/Product/productSlice";

//create sotre
const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

export default store;
