import { createContext, useContext, useState } from "react";
import { useApiClient } from "../../hooks/useApiClient";
import { AuthContext } from "../auth/authContext";
import { useCustomToast } from "../../hooks/useCustomToast";

export const SubscribeContext = createContext();

export const SubscribeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { getCsrfToken } = useContext(AuthContext);

  const { success, error } = useCustomToast();

  const apiClient = useApiClient();

  const subscribe = async ({ email }) => {
    try {
      await getCsrfToken();
      setIsLoading(true);
      const { data } = await apiClient.post("/subscribe", { email });
      success(data.message);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      error(err.response.data.error);
    }
  };

  return (
    <SubscribeContext.Provider value={{ subscribe, isLoading }}>
      {children}
    </SubscribeContext.Provider>
  );
};
