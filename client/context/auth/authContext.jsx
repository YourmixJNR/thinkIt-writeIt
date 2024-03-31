import React, { createContext, useReducer, useEffect } from "react";
import authReducer from "../auth/authReducer";
import { StorageServices } from "../../libs/storage";

export const initialState = {
  user: null,
  isLoggedIn: false,
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(StorageServices.getUser()),
      isLoggedIn: JSON.parse(StorageServices.getAuth()),
    });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
