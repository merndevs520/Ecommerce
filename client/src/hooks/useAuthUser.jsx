import React from "react";
import { useSelector } from "react-redux";
import { getUserData } from "../features/Auth/authSlice";

export const useAuthUser = () => {
  const { user } = useSelector(getUserData);
  return { user };
};
