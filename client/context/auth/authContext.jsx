import React, { createContext, useReducer, useEffect } from "react";
import authReducer from "../auth/authReducer";
import { StorageServices } from "../../utils/storage";

export const initialState = {
  user: null,
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(StorageServices.getUser()),
    });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
