import userReducer from "../user/userReducer";
import { useApiClient } from "../../hooks/useApiClient";
import { createContext, useEffect, useReducer } from "react";

export const UserContext = createContext();

export const initialState = {
  user: null,
  isLoading: false,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const apiClient = useApiClient();

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
        isLoading: false
      });
    } catch (err) {
      console.log(err);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
