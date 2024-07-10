import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { baseURL } from "../Components/ServerURL";

export const AuthorizationContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const response = await axios.post(`${baseURL}/auth/login`, inputs, {
      withCredentials: true,
    });
    setCurrentUser(response.data);
    localStorage.setItem("token", JSON.stringify(response.data.token));
  };

  const logout = async () => {
    await axios.post(
      `${baseURL}/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    setCurrentUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthorizationContext.Provider value={{ login, logout, currentUser }}>
      {children}
    </AuthorizationContext.Provider>
  );
};
