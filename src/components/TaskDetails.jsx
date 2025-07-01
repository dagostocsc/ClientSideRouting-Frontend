import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TaskCardStyles.css";
import { useParams } from "react-router";

/*
<div className={`task-card ${task.completed ? "completed" : "incomplete"}`}>
      <div className="task-card-header">
        <h2>{task.title}</h2>
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

    <div className="task-card-header">
      <h2>{task.title}</h2>
      <h2>{task.description}</h2>
      <h3>{task.userId}</h3>
    </div>
*/

const TaskDetail = ({ API_URL }) => {
  const [task, setTask] = useState(null);
  const { id } = useParams();
  const [user, setUser] = useState(null);

  console.log("Fetching task with ID:", id);

  useEffect(() => {
    async function fetchTask() {
      try {
        const taskResponse = await axios.get(`${API_URL}/api/tasks/${id}`);
        setTask(taskResponse.data);

        if (taskResponse.data.userId) {
          const userResponse = await axios.get(
            `${API_URL}/api/users/${taskResponse.data.userId}`
          );
          setUser(userResponse.data);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }

    fetchTask();
  }, [id]);

  if (!task) return;

  return (
    <div className="task-card">
      <div className="task-card-header">
        <h2>{task.title}</h2>
      </div>
      <p>Description: {task.description}</p>
      <p>User ID: {user?.name}</p>
    </div>
  );
};

export default TaskDetail;
