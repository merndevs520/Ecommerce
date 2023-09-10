import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import adminReducer from "../features/Admin/adminSlice";

//create sotre
const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

export default store;
