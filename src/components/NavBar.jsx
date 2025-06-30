import React from "react";
import "./NavBarStyles.css";

const NavBar = () => {
  return (
    <nav className="navbar"> 
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
      All Tasks
      </NavLink>
      <NavLink to="/completed" className={({ isActive }) => isActive ? "active" : ""}> 
      Completed Tasks
      </NavLink>
      <NavLink to="/incomplete" className={({ isActive }) => isActive ? "active" : ""}>
      Incomplete Tasks
      </NavLink>
      <NavLink to="/add-task" className={({ isActive }) => isActive ? "active" : ""}>
      Add Task
      </NavLink>
    </nav>
  );
};

export default NavBar;
