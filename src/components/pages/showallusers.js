import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../cards/usercard';
import Sidebar from '../cards/sidebar';


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

    return (
        <div className='bookingsContainer'>
      
       <Sidebar/>
            <div className='users'>
                <h3>Users </h3>
                <div className="user-list">
                    {users.map(user => (
                        <UserCard key={user._id} user={user} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Users;
