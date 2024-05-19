import React, { useState } from 'react';
import axios from 'axios';
import '../styles/signup.css';
import LoadingSpinner from '../cards/LoadingSpinner'; // Import the LoadingSpinner component

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType] = useState('User');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!username || !email || !password) {
      setError('Please enter all the details.');
      return;
    }
    setLoading(true); // Set loading to true when signup starts

    const signupRequest = axios.post('http://localhost:5000/signup', { username, email, password, userType });

    // Create a promise that resolves after 3 seconds
    const delay = new Promise((resolve) => setTimeout(resolve, 500));

    try {
      const response = await Promise.all([signupRequest, delay]).then(
        (results) => results[0] // The first result is the signupRequest response
      );

      console.log(response.data);
      setLoading(false); // Set loading to false when signup is successful
      window.location.href = "./Login";
    } catch (error) {
      console.error('Error adding user:', error);
      setLoading(false); // Set loading to false if there is an error
      if (error.response && error.response.data && error.response.data.error && error.response.data.error.includes('already exists')) {
        setError('User already exists. Please try a different email.');
      } else {
        setError('Signup failed. Please try again.');
      }
    }
  };

  return (
    <div className="signup-container">
      <a href="/" className="logo bookingLogo signupLogo">Ride<span>Exchange</span></a>    
      {loading && <LoadingSpinner />} {/* Conditionally render the loading spinner */}
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
            disabled={loading} // Disable input when loading
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
            disabled={loading} // Disable input when loading
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
            disabled={loading} // Disable input when loading
          />
        </div>
        <button type="submit" className="signup-button" disabled={loading}> {/* Disable button when loading */}
          {loading ? 'Signing up...' : 'Signup'}
        </button>
        <p className="login-text">Already have an account? <a href='/Login' className="login-link">Login</a></p>
        {error && <div className="error-message">{error}</div>} 
      </form>
    </div>
  );
};

export default Signup;
