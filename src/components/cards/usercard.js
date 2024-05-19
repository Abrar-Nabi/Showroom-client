import React, { useEffect, useState } from "react";
import "../styles/UsersCard.css"
import '../styles/Appointment.css';
const UserCard = ({ user,  onDelete }) => {
  const [isAdmin, setisAdmin] = useState(false);
  useEffect(() => {
    const admin = localStorage.getItem('userType');
    if (admin === 'Admin') {
      setisAdmin(true);
    }
    }, []);
  return (
    <div className="user-card">
           <i class="ri-user-fill"></i> 
      <p>
        <span>Email:</span> {user.email}
      </p>
      <p>
        <span>Username:</span> {user.username}
      </p>
      {isAdmin ? (
      <div className='btn-container'>
        <button onClick={() => onDelete(user._id)}>Delete</button>
      </div>) : null}
    </div>
  );
};

export default UserCard;
