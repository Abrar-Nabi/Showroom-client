import React, { useState } from 'react';
import axios from 'axios';
import '../styles/login.css';               
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const { token, username, userType } = response.data; // Include userType in the response
      console.log( response.data);
      window.localStorage.setItem('loggedIn', true);
      window.localStorage.setItem('userEmail', email);
      window.localStorage.setItem('username', username);
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('userType', userType);

      if (userType === 'Admin') {
        window.location.href = './AdminHome';
        // alert("admin")
      } else if (userType === 'User') {
        window.location.href = '/';
        // alert("user")
      } else {
        setError('Unknown user type'); // Set an error message for unknown user types
      }
    } catch (error) {
      console.error('Login error:', error.message);
      setError('Login failed'); // Set an error message for login failure
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          className="login-input" 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          className="login-input" 
        />
        <button type="submit" className="login-button">Login</button>
        <a href='/Signup' className="signup-link">Sign up</a>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Login;