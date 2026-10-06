import React, { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "./context/UserContext";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

const AppContent = () => {
  const { loggedIn, login, logout } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "30px"
      }}
    >
      <h1>React Hooks Lab 7</h1>

      <h2>Theme: {theme}</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

      <br />
      <br />

      <button onClick={loggedIn ? logout : login}>
        {loggedIn ? "Logout" : "Login"}
      </button>

      {loggedIn && users.length > 0 && (
        <h2>Welcome, Huzaifa</h2>
      )}
    </div>
  );
};

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;