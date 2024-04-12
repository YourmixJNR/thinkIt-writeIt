import React, { createContext,useState, useReducer, useEffect, useLayoutEffect } from "react";
import authReducer from "../auth/authReducer";
import { useApiClient } from "../../hooks/useApiClient";
import { useCustomToast } from "../../hooks/useCustomToast";
import { StorageServices } from "../../libs/storage";
import { useRouter } from "next/router";

export const AuthContext = createContext();

export const initialState = {
  user: null,
  isLoggedIn: "",
  isLoading: false,
};

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const [state, dispatch] = useReducer(authReducer, initialState);

  const apiClient = useApiClient();
  const { success, error } = useCustomToast();
  const router = useRouter();

  const getCsrfToken = async () => {
    try {
      const { data } = await apiClient.get(`/csrf-token`);
      StorageServices.setCsrfToken(data.csrfToken);
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
    }
  };

  const registerUser = async ({ username, email, password }) => {
    try {
      await getCsrfToken();
      dispatch({
        type: "REGISTER",
        isLoading: true,
      });
      const { data } = await apiClient.post(`/auth/register`, {
        username,
        email,
        password,
      });
      success(data.message);
      dispatch({
        type: "REGISTER",
        isLoading: false,
      });
      router.push("/login");
    } catch (err) {
      console.log("Error:", err);
      error(err.response.data);
      dispatch({
        type: "REGISTER",
        isLoading: false,
      });
    }
  };

  const loginUser = async ({ email, password }) => {
    try {
      await getCsrfToken();
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
      StorageServices.setAuth(JSON.stringify(true));
      success(data.message);
      router.push("/user");
    } catch (err) {
      console.log(err);
      error(err.response.data);
      dispatch({
        type: "LOGIN",
        isLoggedIn: false,
        isLoading: false,
      });
    }
  };

  const logoutUser = async () => {
    dispatch({
      type: "LOGOUT",
    });
    await apiClient.get("/auth/logout");
    StorageServices.removeUser();
    StorageServices.removeAuth();
    router.push("/login");
  };

  useLayoutEffect(() => {
    // Attempt to rehydrate the state from storage
    const storedUser = StorageServices.getUser();
    const storedAuth = StorageServices.getAuth();
   
    if (storedUser && storedAuth) {
       // If we have a stored user and auth state, update the state accordingly
       dispatch({
         type: "LOGIN",
         payload: JSON.parse(storedUser),
         isLoggedIn: JSON.parse(storedAuth),
       });
    }
   }, []);

  return (
    <AuthContext.Provider
      value={{ state, dispatch, registerUser, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
