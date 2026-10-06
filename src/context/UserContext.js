import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const login = () => {
    setLoggedIn(true);
    localStorage.setItem("loggedIn", "true");
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.setItem("loggedIn", "false");
  };

  return (
    <UserContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};