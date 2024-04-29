import React, { createContext, useReducer, useEffect, useContext } from "react";
import authReducer from "../auth/authReducer";
import { useApiClient } from "../../hooks/useApiClient";
import { useCustomToast } from "../../hooks/useCustomToast";
import { StorageServices } from "../../libs/storage";
import { useRouter } from "next/router";
import { UserContext } from "../user/userContext";

export const AuthContext = createContext();

export const initialState = {
  user: null,
  isLoading: false,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const { getCurrentUser } = useContext(UserContext);

  const apiClient = useApiClient();
  const { success, error } = useCustomToast();
  const router = useRouter();

  const registerUser = async ({ email, password }) => {
    try {
      dispatch({
        type: "REGISTER",
        isLoading: true,
      });
      const { data } = await apiClient.post(`/auth/register`, {
        email,
        password,
      });
      success(data.message);
      dispatch({
        type: "REGISTER",
        isLoading: false,
      });
      router.push("/auth/login");
    } catch (err) {
      console.log("Error:", err);
      error(err.response.data.error);
      dispatch({
        type: "REGISTER",
        isLoading: false,
      });
    }
  };

  const loginUser = async ({ email, password }) => {
    try {
      dispatch({
        type: "LOGIN",
        isLoading: true,
      });
      const { data } = await apiClient.post("/auth/login", { email, password });
      dispatch({
        type: "LOGIN",
        payload: data.user,
        isLoggedIn: true,
      });
      StorageServices.setUser(JSON.stringify(data.user));
      await getCurrentUser();
      success(data.message);
      router.push("/user");
    } catch (err) {
      console.log(err);
      error(err.response.data.error);
      dispatch({
        type: "LOGIN",
        isLoading: false,
      });
    }
  };

  const logoutUser = async () => {
    dispatch({
      type: "LOGOUT",
    });
    await apiClient.get("/auth/logout");
    router.push("/auth/login");
    StorageServices.removeUser();
    StorageServices.removeCsrfToken();
  };

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(StorageServices.getUser()),
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
