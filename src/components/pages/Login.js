import React, { useState } from 'react';
import axios from 'axios';
import '../styles/login.css';

import LoadingSpinner from '../cards/LoadingSpinner'; // Import the LoadingSpinner component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login starts
    setError('');

    const loginRequest = axios.post('http://localhost:5000/login', { email, password });

    // Create a promise that resolves after 3 seconds
    const delay = new Promise((resolve) => setTimeout(resolve, 500));

    try {
      const response = await Promise.all([loginRequest, delay]).then(
        (results) => results[0] // The first result is the loginRequest response
      );
      
      const { token, username, userType } = response.data; // Include userType in the response
      console.log(response.data);
      window.localStorage.setItem('loggedIn', true);
      window.localStorage.setItem('userEmail', email);
      window.localStorage.setItem('username', username);
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('userType', userType);

      setLoading(false); // Set loading to false when login is successful
      if (userType === 'Admin') {
        window.location.href = './AdminHome';
      } else if (userType === 'User') {
        window.location.href = './';
      } else {
        setError('Unknown user type');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      setLoading(false); // Set loading to false if there is an error
      setError('Email or Password is Wrong');
    }
  };

  return (
    <div className="login-container">
      <a href="/" className="logo bookingLogo">Ride<span>Exchange</span></a>
      {loading && <LoadingSpinner />} {/* Conditionally render the loading spinner */}
      <form className="login-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          className="login-input" 
          disabled={loading} // Disable input when loading
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          className="login-input" 
          disabled={loading} // Disable input when loading
        />
        <button type="submit" className="login-button" disabled={loading}> {/* Disable button when loading */}
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p className="signup-text">Don't have an account? <a href='/Signup' className="signup-link">Sign up</a></p>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
