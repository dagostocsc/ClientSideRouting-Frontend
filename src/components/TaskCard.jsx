import React from "react";
import axios from "axios";
import "./TaskCardStyles.css";
import { useNavigate } from "react-router";

const TaskCard = ({ task, fetchAllTasks, API_URL }) => {
  let navigate = useNavigate();

  const handleCompleteTask = async () => {
    try {
      await axios.patch(`${API_URL}/api/tasks/${task.id}`, {
        completed: !task.completed,
      });
      fetchAllTasks();
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      await axios.delete(`${API_URL}/api/tasks/${task.id}`);
      fetchAllTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleClickDetail = async () => {
    navigate(`/tasks/${task.id}`);
  };

  return (
    <div className={`task-card ${task.completed ? "completed" : "incomplete"}`}>
      <div className="task-card-header">
        <h2 onClick={handleClickDetail} style={{ cursor: "pointer" }}>
          {task.title}
        </h2>
        <div className="task-card-header-buttons">
          {task.completed ? (
            <p onClick={handleCompleteTask}>🔄</p>
          ) : (
            <p onClick={handleCompleteTask}>✅</p>
          )}
          <p onClick={handleDeleteTask}>🗑️</p>
        </div>
      </div>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
