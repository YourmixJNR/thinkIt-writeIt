import userReducer from "../user/userReducer";
import { useApiClient } from "../../hooks/useApiClient";
import { createContext, useEffect, useReducer } from "react";
import { useCustomToast } from "../../hooks/useCustomToast";

export const UserContext = createContext();

export const initialState = {
  user: null,
  isLoading: false,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const apiClient = useApiClient();
  const { success, error } = useCustomToast();

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
      console.log(err);
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
        type: "UPDATE_USER",
        user: data.message,
        isLoading: false,
      });
      await getCurrentUser();
      success(data.message);
    } catch (err) {
      console.log(err);
      error(err.response.data.error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        getCurrentUser,
        getCurrentUser,
        updateSettings,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
