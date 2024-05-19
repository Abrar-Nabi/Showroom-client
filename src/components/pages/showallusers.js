import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../cards/usercard';
import Sidebar from '../cards/sidebar';
import '../styles/Appointment.css';

const Users = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        refreshUsers();
    }, []);

    const refreshUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/allusers');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };




      const handleDeleteAppointment = (id) => {
        axios.delete(`http://localhost:5000/allusers/delete/${id}`)
          .then(response => {
            console.log(response.data);
            setUsers(users.filter(users => users._id !== id));
            // Refresh appointments list after deletion
           
          })
          .catch(error => console.error('Error deleting User:', error));
      };
    
    
    return (
        <div className='bookingsContainer'>
      
       <Sidebar/>
    <div className='users'>
                <h3>Users </h3>
                <div className="user-list">
                    {users.map(user => (
                        <UserCard key={user._id} user={user} onDelete={handleDeleteAppointment} />
                    ))}
                </div>
            </div> 

        </div> 
    );
};

export default Users;
