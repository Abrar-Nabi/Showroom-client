import React, { useState } from 'react';
import axios from 'axios';
import '../styles/signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType] = useState('User');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/signup', { username, email, password,userType }); // Updated to send username as well
            console.log(response.data);
            window.location.href = "./Login";
        } catch (error) {
            console.error('Error adding user:', error);
            // Add any error handling logic here
        }
    };

    return (
      
        <div className="signup-container">
      <a href="/" className="logo bookingLogo signupLogo">Ride<span>Exchange</span></a>    
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter your username" 
                className="signup-input" 
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                className="signup-input" 
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password" 
                className="signup-input" 
              />
            </div>
            <button type="submit" className="signup-button">Signup</button>
            <p className="login-text">Already have an account? <a href='/Login' className="login-link">Login</a></p>
          </form>
        </div>
      );
};

export default Signup;
