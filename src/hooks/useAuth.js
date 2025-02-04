import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../utils/api";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setSnackbarOpen(false);

  const handleSignUpSuccess = ()=> setSignupSuccess(false);

  const signup = async (email, password) => {
    setLoading(true);
    handleSignUpSuccess();
    try {
      await apiRequest("auth/signup", "POST", {
        email,
        password,
      });
      setSignupSuccess(true);
      setLoading(false);
      setError(null);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setSnackbarOpen(true);
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
      setSnackbarOpen(true);
    }
  };

  const reset = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError("Not part of the assignment. Haha!");
      setSnackbarOpen(true);
    }, 2000);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setError(null);
  };

  return {
    user,
    signup,
    login,
    logout,
    reset,
    signupSuccess,
    error,
    loading,
    snackbarOpen,
    handleClose,
    handleSignUpSuccess
  };
};
