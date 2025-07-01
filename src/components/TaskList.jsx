import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, fetchAllTasks, API_URL }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            fetchAllTasks={fetchAllTasks}
            API_URL={API_URL}
          ></TaskCard>
        ))
      ) : (
        <p>No tasks found</p>
      )}
    </div>
  );
};

export default TaskList;
