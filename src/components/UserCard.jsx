import React from "react";
import axios from "axios";
import "./TaskCardStyles.css";

const UserCard = ({ user }) => {
  return (
    <div className="task-card">
      <div className="task-card-header">
        <h2>{user?.name}</h2>
      </div>
    </div>
  );
};

export default UserCard;
