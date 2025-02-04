/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import { apiRequest } from "../utils/api";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const token = localStorage.getItem("token");

  const handleClose = () => setSnackbarOpen(false);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiRequest("tasks", "GET", null, token);
      setTasks(data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setSnackbarOpen(true);
    }
  });

  useEffect(() => {
    if (token) fetchTasks();
  }, []);

  const addTask = async (task) => {
    setLoading(true);

    try {
      await apiRequest("tasks", "POST", task, token);
      fetchTasks();
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setSnackbarOpen(true);
    }
  };

  const updateTask = async (id, updates) => {
    setLoading(true);

    try {
      await apiRequest(`tasks/${id}`, "PUT", updates, token);
      fetchTasks();
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setSnackbarOpen(true);
    }
  };

  const deleteTask = async (id) => {
    setLoading(true);

    try {
      await apiRequest(`tasks/${id}`, "DELETE", null, token);
      fetchTasks();
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setSnackbarOpen(true);
    }
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    error,
    loading,
    snackbarOpen,
    handleClose,
  };
};
