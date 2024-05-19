import userReducer from "../user/userReducer";
import { createContext, useReducer } from "react";
import apiClient from "../../libs/apiClient";
import { useCustomToast } from "../../hooks/useCustomToast";

export const UserContext = createContext();

export const initialState = {
  user: null,
  isLoading: false,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const { success, error } = useCustomToast();

  const errorHandler = (err) => {
    if (err.response) {
      error(err.response.data.error);
    } else {
      error("Something went wrong. Please try again later.");
    }
  };

  const getCurrentUser = async () => {
    try {
      dispatch({
        type: "GET_USER",
        isLoading: true,
      });
      const { data } = await apiClient.get("/current-user");
      dispatch({
        type: "GET_USER",
        payload: data.data,
        isLoading: false,
      });
    } catch (err) {
      errorHandler(err);
      dispatch({
        type: "GET_USER",
        user: null,
        isLoading: false,
      });
    }
  };

  const updateSettings = async (updateData) => {
    try {
      dispatch({
        type: "UPDATE_USER",
        isLoading: true,
      });
      const { data } = await apiClient.post("/update-user", updateData);
      dispatch({
        type: "UPDATE_USER_SUCCESS",
        payload: data.message,
      });
      await getCurrentUser();
      success(data.message);
    } catch (err) {
      errorHandler(err);
      dispatch({
        type: "UPDATE_USER_ERROR",
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        getCurrentUser,
        updateSettings,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
