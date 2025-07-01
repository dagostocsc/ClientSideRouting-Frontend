import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TaskCardStyles.css";
import { useParams } from "react-router";

const TaskDetail = ({ API_URL }) => {
  const [task, setTask] = useState(null);
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchTask() {
      try {
        const taskResponse = await axios.get(`${API_URL}/api/tasks/${id}`);
        setTask(taskResponse.data);

        //console.log("Fetching task with USER ID:", taskResponse.data.userId);
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
  }, []);

  if (!task) return;

  return (
    <div className="task-card">
      <div className="task-card-header">
        <h2>{task.title}</h2>
      </div>
      <p>Description: {task.description}</p>
      <p>User Name: {user?.name}</p>
    </div>
  );
};

export default TaskDetail;
