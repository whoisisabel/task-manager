import React from "react";
import Paper from "@mui/material/Paper";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import AddButton from "../../components/Buttons/AddButton";

export default function TodoList({
  loading,
  open,
  openTask,
  title,
  data,
  input,
  handleInput,
  handleSubmit,
  handleUpdate,
  handleDelete,
  handleClose,
  handleOpen,
  handleOpenTask,
}) {
  return (
    <Paper variant="outlined" className="p-4">
      <div className="flex items-center">
        <AddButton handleClick={handleOpen} />
        <TodoForm input={input} handleInput={handleInput} />
        <h3 className="font-semibold">{title}</h3>
        <div className="ml-2 p-0.5 px-2 text-xs rounded bg-blue-100 text-gray">{data.length}</div>
      </div>
      {data && data.length > 0 ? (
        <div className="bg-gray-100 p-4 rounded-lg max-h-[450px] overflow-scroll">
          {data.map((task, index) => (
            <TodoItem key={index} data={task} handleOpenTask={handleOpenTask} />
          ))}
        </div>
      ) : null}
      <TodoForm
        loading={loading}
        input={input}
        open={open}
        openTask={openTask}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        handleClose={handleClose}
        handleOpenTask={handleOpenTask}
      />
    </Paper>
  );
}
