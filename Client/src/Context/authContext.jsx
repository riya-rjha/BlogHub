import axios from "axios";
import { createContext, useState, useEffect } from "react";
import.meta.env.VITE_baseURL;

export const AuthorizationContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("userId")) || null
  );

  const login = async (inputs) => {
    const response = await axios.post(
      `${import.meta.env.VITE_baseURL}/auth/login`,
      inputs,
      {
        withCredentials: true,
      }
    );
    setCurrentUser(response.data);
    setUserId(response.data);
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("userId", JSON.stringify(response.data.userId));
  };

  const logout = async () => {
    await axios.post(
      `${import.meta.env.VITE_baseURL}/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    setCurrentUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  const filterSearchedBlogs = (search, allBlogs) => {
    const newBlogs = allBlogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(search) ||
        blog.title.toUpperCase().includes(search) ||
        blog.desc.toLowerCase().includes(search) ||
        blog.title.toUpperCase().includes(search)
    );
    return newBlogs;
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthorizationContext.Provider
      value={{
        login,
        logout,
        currentUser,
        userId,
        filterSearchedBlogs,
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};
