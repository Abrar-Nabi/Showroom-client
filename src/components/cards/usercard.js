import React from 'react';
import "../styles/UsersCard.css"

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <p>
        <span>Email:</span> {user.email}
      </p>
      <p>
        <span>Username:</span> {user.username}
      </p>
    
    </div>
  );
};

export default UserCard;
