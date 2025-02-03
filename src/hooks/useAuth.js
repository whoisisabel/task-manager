import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../utils/api";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async (email, password) => {
    setLoading(true);
    try {
      await apiRequest("auth/signup", "POST", {
        email,
        password,
      });
      setLoading(false);
      setError(null);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const data = await apiRequest("auth/login", "POST", { email, password });
      localStorage.setItem("token", data.token);
      setUser(data.token);
      setLoading(false);
      setError(null);
      navigate("/app");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setError(null);
  };

  return { user, signup, login, logout, error, loading };
};
