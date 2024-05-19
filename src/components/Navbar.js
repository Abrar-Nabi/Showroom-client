import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './styles/Navbar.css';
import LoadingSpinner from './cards/LoadingSpinner'; // Import the LoadingSpinner component

const Navbar = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [Username, setUsername] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [Toggle, setToggle] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus) {
      setLoggedIn(true);
      const loggedInUsername = localStorage.getItem("username");
      setUsername(loggedInUsername || "Na");
    }
  }, []);

  const handleLogout = () => {
    setLoading(true); // Set loading to true when logout starts

    // Create a promise that resolves after 3 seconds
    const delay = new Promise((resolve) => setTimeout(resolve, 1000));

    delay.then(() => {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      localStorage.removeItem("userType");
      setLoggedIn(false);
      setLoading(false); // Set loading to false after logout process
      window.location.href = "/";
    });
  };

  const toggleMenu = () => {
    const menuBtn = document.getElementById("menu-btn");
    const navBar = document.querySelector(".navBar");
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
  };

  function handleToggle() {
    setToggle(!Toggle);
    console.log('toggle btn clicked');
  }

  return (
    <header id='header' className="header">
      {Toggle ? <i className="ri-close-line" onClick={handleToggle}></i> : <i className="ri-menu-line" onClick={handleToggle}></i>}
      <div id="menu-btn" className="fas fa-bars" onClick={toggleMenu}></div>
      <a href="/" className="logo">Ride<span>Exchange</span></a>
      {loading && <LoadingSpinner />} {/* Conditionally render the loading spinner */}
      <nav className={Toggle ? `Navbar-mobile` : `navBar`}>
        <ul>
          <li><a href="#vehicles">Vehicles</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#featured">Featured</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
          {loggedIn ? (
            <>
              <li>
                <Link to="/yourbookings">Bookings</Link>
              </li>
              <li>
                <span>Welcome, {Username}!</span>
              </li>
              <li>
                <button className="btn" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="btn" to="/Login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
