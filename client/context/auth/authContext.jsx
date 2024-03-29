import React, { createContext, useReducer } from "react";
import { authReducer } from "../auth/authReducer";

export const initialState = {
  user: null,
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
