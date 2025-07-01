import React, { useState } from "react";
import axios from "axios";
//import "./AddUserStyles.css";
import "./AddTaskStyles.css";
import { useNavigate } from "react-router";

const AddUser = ({ fetchAllUsers, API_URL }) => {
  const [name, setName] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${API_URL}/api/users`, {
        name,
      });

      fetchAllUsers();
      navigate("/user-list");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="add-task-container">
      <h1>Add a User</h1>
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          placeholder="User"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUser;
