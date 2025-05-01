import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState(() => {
    // Initialize authToken from localStorage on component mount
    return localStorage.getItem("authToken");
  });

  useEffect(() => {
    // Check if user is authenticated on component mount
    const checkAuth = async () => {
      if (!authToken) {
        setLoading(false);
        return;
      }

      try {
        // Configure axios with the auth token
        axios.defaults.headers.common["Authorization"] = `Token ${token}`;

        // Fetch user data from your backend
        const response = await axios.get(
          "http://localhost:8000/api/auth/user/"
        );
        setUser(response.data);
      } catch (error) {
        console.error("Authentication error:", error);
        // Only clear token if there was a real auth error (e.g., 401)
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("authToken");
          setAuthToken(null);
          delete axios.defaults.headers.common["Authorization"];
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [authToken]);

  const login = (Details, userData) => {

    let access = Details.access;
    let refresh = Details.refresh;
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);

    setAuthToken(access);
    axios.defaults.headers.common["Authorization"] = `Token ${access}`;

    setUser(userData);
  };

  const logout = async () => {
    try {
      if (authToken) {
        await axios.post("http://localhost:8000/api/auth/logout/");
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear token from both state and localStorage
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");

      setAuthToken(null);
      delete axios.defaults.headers.common["Authorization"];
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
