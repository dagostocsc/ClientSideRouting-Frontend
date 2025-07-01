import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, fetchAllUsers, API_URL }) => {
  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            fetchAllUsers={fetchAllUsers}
            API_URL={API_URL}
          ></UserCard>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default UserList;
