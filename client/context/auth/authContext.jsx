import React, { createContext, useReducer, useContext } from "react";
import authReducer from "../auth/authReducer";
import { useCustomToast } from "../../hooks/useCustomToast";
import apiClient from "../../libs/apiClient";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { UserContext } from "../user/userContext";

export const AuthContext = createContext();

export const initialState = {
  isLoading: false,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const { getCurrentUser } = useContext(UserContext);

  const { success, error } = useCustomToast();
  const router = useRouter();

  const errorHandler = (err) => {
    if (err.response) {
      error(err.response.data.error);
    } else {
      error("Something went wrong. Please try again later.");
    }
  };

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
      errorHandler(err);
      dispatch({
        type: "REGISTER",
        isLoading: false,
      });
      throw err;
    }
  };

  const loginUser = async ({ email, password }) => {
    dispatch({
      type: "LOGIN",
      isLoading: true,
    });

    const data = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (data.error) {
      error(data.error);
      dispatch({
        type: "LOGIN",
        isLoading: false,
      });
      throw new Error(data.error);
    }

    await getCurrentUser();
    router.push("/user");
    success("Login Successfully");
    dispatch({
      type: "LOGIN",
      isLoading: false,
    });
  };

  const logoutUser = async () => {
    await signOut({ redirect: false });
    router.push("/auth/login");
    success("Logout Successfully");
  };

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
