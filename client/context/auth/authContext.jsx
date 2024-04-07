import React, { createContext, useReducer } from "react";
import authReducer from "../auth/authReducer";
import { useApiClient } from "../../hooks/useApiClient";
import { useCustomToast } from "../../hooks/useCustomToast";
import { StorageServices } from "../../libs/storage";
import { useRouter } from "next/router";

export const initialState = {
  user: null,
  isLoggedIn: false,
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
      // setIsLoading(true);
      await apiClient.post(`/auth/register`, {
        username,
        email,
        password,
      });
      success("Registration Successful");
      // clearFormState();
      // setIsLoading(false);
    } catch (err) {
      console.log("Error:", err);
      error(err.response.data);
      // setIsLoading(false);
    }
  };

  const loginUser = async ({ email, password }) => {
    try {
      // setLoading(true);
      const { data } = await apiClient.post("/auth/login", { email, password });
      // dispatch({
      //   type: "LOGIN",
      //   payload: data,
      //   isLoggedIn: true,
      // });
      StorageServices.setUser(JSON.stringify(data));
      StorageServices.setAuth(JSON.stringify(true));
      success("Login Successfully");
      // clearFormState();
      // setLoading(false);
      router.push("/");
    } catch (err) {
      console.log(err);
      error(err.response.data);
      // setLoading(false);
    }
  };

  // useEffect(() => {
  //   dispatch({
  //     type: "LOGIN",
  //     payload: JSON.parse(StorageServices.getUser()),
  //     isLoggedIn: JSON.parse(StorageServices.getAuth()),
  //   });
  // }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch, registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
