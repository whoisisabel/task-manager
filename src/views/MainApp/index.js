import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useTasks } from "../../hooks/useTasks";
import MenuAppBar from "../../components/Menu/MenuAppBar";
import SearchInput from "../../components/Input/SearchInput";
import Footer from "../../components/Footer";
import SnackbarMessage from "../../components/SnackbarMessage";
import { filterByKey, filterBySearch } from "../../utils/sharedFunctions";
import TodoList from "./TodoList";

const VIEWS = [
  {
    label: "To-do",
    value: "TODO",
  },
  {
    label: "In Progress",
    value: "in-progress",
  },
  {
    label: "Done",
    value: "done",
  },
];

export default function Todo() {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    loading,
    error,
    snackbarOpen,
    handleClose,
  } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
    createDate: dayjs(),
    deadline: null,
  });
  const [searchItem, setSearchItem] = useState("");
  const [open, setOpen] = useState(false);
  const [openTask, setOpenTask] = useState(false);

  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleCloseTask = () => {
    setOpen(false);
    setOpenTask(false);
    setTask({
      title: "",
      description: "",
      status: "",
      priority: "",
      createDate: dayjs(),
      deadline: null,
    });
  };

  const handleOpenTask = (data) => {
    setTask(data);
    setOpenTask(true);
    setOpen(true);
  };

  const handleInput = (value, e) => {
    const title = e ? e.target.id : value.target.name;
    const inputValue = e ? e.target.value : value.target.value;
    setTask((prevTask) => ({
      ...prevTask,
      [title]: title === "deadline" ? dayjs(inputValue) : inputValue,
    }));
  };

  const handleTask = () => {
    addTask({
      title: task.title,
      description: task.description,
      deadline: task.deadline,
      priority: task.priority,
    });
  };

  const handleUpdateTask = () => {
    updateTask(task.id, { status: task.status });
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  useEffect(() => {
    handleCloseTask();
  }, [tasks]);

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (!auth) {
      navigate("/");
    }
  }, [navigate]);
  const filteredData = searchItem ? filterBySearch(tasks, searchItem) : tasks;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <MenuAppBar />
        <div className="p-6 flex justify-end">
          <SearchInput input={searchItem} handleInput={setSearchItem} />
        </div>
        <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
          {VIEWS.map((view, index) => (
            <TodoList
              key={index}
              title={view.label}
              loading={loading}
              open={open}
              openTask={openTask}
              data={filterByKey(filteredData, "status", view.value)}
              input={task}
              handleInput={handleInput}
              handleSubmit={handleTask}
              handleUpdate={handleUpdateTask}
              handleDelete={handleDeleteTask}
              handleOpen={handleOpen}
              handleOpenTask={handleOpenTask}
              handleClose={handleCloseTask}
            />
          ))}
        </div>
        <SnackbarMessage
          message={error}
          severity="error"
          open={snackbarOpen}
          onClose={handleClose}
        />
      </div>
      <Footer />
    </div>
  );
}
