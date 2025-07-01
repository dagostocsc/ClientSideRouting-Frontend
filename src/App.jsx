import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import axios from "axios";
import "./AppStyles.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import TaskDetail from "./components/TaskDetails";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

const API_URL = process.env.API_URL || "http://localhost:8080";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  async function fetchAllTasks() {
    try {
      const response = await axios.get(`${API_URL}/api/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  async function fetchAllUsers() {
    try {
      const response = await axios.get(`${API_URL}/api/users`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchAllTasks();
    fetchAllUsers();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <TaskList
              tasks={tasks}
              fetchAllTasks={fetchAllTasks}
              API_URL={API_URL}
            />
          }
        />
        <Route
          path="/add-task"
          element={
            <AddTask
              fetchAllTasks={fetchAllTasks}
              fetchAllUsers={fetchAllUsers}
              users={users}
              API_URL={API_URL}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <TaskList
              tasks={tasks.filter((task) => task.completed)}
              fetchAllTasks={fetchAllTasks}
              API_URL={API_URL}
            />
          }
        />
        <Route
          path="/incomplete"
          element={
            <TaskList
              tasks={tasks.filter((task) => !task.completed)}
              fetchAllTasks={fetchAllTasks}
              API_URL={API_URL}
            />
          }
        />
        <Route path="/tasks/:id" element={<TaskDetail API_URL={API_URL} />} />
        <Route
          path="/add-user"
          element={<AddUser fetchAllUsers={fetchAllUsers} API_URL={API_URL} />}
        />
        <Route
          path="/user-list"
          element={
            <UserList
              users={users}
              fetchAllUsers={fetchAllUsers}
              API_URL={API_URL}
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
