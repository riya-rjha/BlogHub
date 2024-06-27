import axios from "axios";
import { createContext, useState } from "react";
import { useEffect } from "react";

// Create a context
export const authorizationContext = createContext();

// Create a provider with different actions - login, logout
export const authContextProvider = ({ children }) => {
  // get value of currentuser if it exists, else null
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  // set value of currentUser equal to input data of login
  const login = async (inputs) => {
    const response = await axios.post("/auth/login", inputs);
    setCurrentUser(response.data);
  };

  // set currentUser null during logout
  const logout = async () => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  // set value of currentUser whenever user changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  // Return the context provider component
  return(
    <authorizationContext.Provider value={{login, logout, currentUser}}>
        {children}
    </authorizationContext.Provider>
  )

};

