import React, { useState } from "react";
import dayjs from "dayjs";
import MenuAppBar from "../../components/Menu/MenuAppBar";
import SearchInput from "../../components/Input/SearchInput";
import TodoList from "./TodoList";
import { Tasks } from "../../utils/test";
import { filterByKey, filterBySearch } from "../../utils/sharedFunctions";
import Footer from "../../components/Footer";

const VIEWS = [
  {
    label: "To-do",
    value: "to-do",
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
  const [taskList, setTaskList] = useState(Tasks);
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
    createDate: dayjs(),
    deadline: null,
  });
  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTask, setOpenTask] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
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

  const handleSearch = () => {
    console.log("searching . . .");
  };

  const handleTask = () => {
    setLoading(true);
    setTaskList((prevTasks) => [...prevTasks, task]);
    setTimeout(() => {
      setLoading(false);
      handleClose();
    }, 1000);
  };

  const handleUpdateTask = () => {
    setLoading(true);
    const updatedTask = task;

    setTaskList((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      setOpenTask(false);
    }, 1000);
  };

  const handleDeleteTask = () => {
    setLoading(true);
    const updatedTask = task;

    setTaskList((prevTasks) =>
      prevTasks.filter((task) => task.id !== updatedTask.id)
    );

    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      setOpenTask(false);
    }, 1000);
  };

  const filteredData = searchItem
    ? filterBySearch(taskList, searchItem)
    : taskList;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <MenuAppBar />
        <div className="p-6 flex justify-end">
          <SearchInput
            input={searchItem}
            handleInput={setSearchItem}
            handleSearch={handleSearch}
          />
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
              handleClose={handleClose}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
