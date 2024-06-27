import axios from "axios";
import { createContext, useState } from "react";
import { useEffect } from "react";
import { baseURL } from "../Components/ServerURL";

// Create a context
export const AuthorizationContext = createContext();

// Create a provider with different actions - login, logout
export const AuthContextProvider = ({ children }) => {
  // get value of currentuser if it exists, else null
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // set value of currentUser equal to input data of login
  const login = async (inputs) => {
    const response = await axios.post(`${baseURL}/auth/login`, inputs);
    setCurrentUser(response.data);
  };

  // set currentUser null during logout
  const logout = async () => {
    await axios.post(`${baseURL}/auth/logout`);
    setCurrentUser(null);
  };

  // set value of currentUser whenever user changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  // Return the context provider component
  return (
    <AuthorizationContext.Provider value={{ login, logout, currentUser }}>
      {children}
    </AuthorizationContext.Provider>
  );
};
