import React from "react";
import { Route } from "react-router-dom";
import Login from "./views/Auth";
import Todo from "./views/MainApp";

const routes = (
  <>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/app" element={<Todo />} />
  </>
);

export default routes;
