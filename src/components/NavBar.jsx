import React from "react";
import "./NavBarStyles.css";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        All Tasks
      </NavLink>
      <NavLink
        to="/completed"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Completed Tasks
      </NavLink>
      <NavLink
        to="/incomplete"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Incomplete Tasks
      </NavLink>
      <NavLink
        to="/add-task"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Add Task
      </NavLink>
      <NavLink
        to="/add-user"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Add User
      </NavLink>
      <NavLink
        to="/user-list"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        All Users
      </NavLink>
    </nav>
  );
};

export default NavBar;
