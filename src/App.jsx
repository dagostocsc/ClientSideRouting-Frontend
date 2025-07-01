const API_URL = process.env.API_URL || "client-side-routing-backend-nine.vercel.app";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router"; 
import axios from "axios";
import "./AppStyles.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";

const App = () => {
  const [tasks, setTasks] = useState([]);

  async function fetchAllTasks() {
    try {
      const response = await axios.get(`${API_URL}/api/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<TaskList tasks={tasks} fetchAllTasks={fetchAllTasks} />}
        />
        <Route
          path="/add-task"
          element={<AddTask fetchAllTasks={fetchAllTasks} />}
        />
        <Route
          path="/completed"
          element={
            <TaskList
              tasks={tasks.filter(task => task.completed)}
              fetchAllTasks={fetchAllTasks}
            />
          }
        />
        <Route
          path="/incomplete"
          element={
            <TaskList
              tasks={tasks.filter(task => !task.completed)}
              fetchAllTasks={fetchAllTasks}
            />
          }
        />
      </Routes>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
