import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./routes";
import "./styles/App.css";
import "./styles/tailwind.css";

export default function App() {
  return (
    <Router>
      <Routes>{routes}</Routes>
    </Router>
  );
}
