import { createContext, useContext, useState } from "react";
import apiClient from "../../libs/apiClient";
import { useCustomToast } from "../../hooks/useCustomToast";

export const SubscribeContext = createContext();

export const SubscribeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { success, error } = useCustomToast();

  const subscribe = async ({ email }) => {
    try {
      setIsLoading(true);
      const { data } = await apiClient.post("/subscribe", { email });
      success(data.message);
      setIsLoading(false);
    } catch (err) {
      if (err.response) {
        error(err.response.data.error);
      } else {
        error("Something went wrong. Please try again later.");
      }
      setIsLoading(false);
      throw err
    }
  };

  return (
    <SubscribeContext.Provider value={{ subscribe, isLoading }}>
      {children}
    </SubscribeContext.Provider>
  );
};
