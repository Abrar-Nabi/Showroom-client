import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [Username, setUsername] = useState("");

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus) {
      setLoggedIn(true);
     
      const loggedInUsername = localStorage.getItem("username");
      setUsername(loggedInUsername || "Na"); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    setLoggedIn(false);
    window.location.href = "/";
  };

  const [Toggle, setToggle] = useState(false);

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
      {Toggle ? <i class="ri-close-line" onClick={handleToggle}></i> : <i class="ri-menu-line" onClick={handleToggle}></i>}
      <div id="menu-btn" className="fas fa-bars" onClick={toggleMenu}></div>
      <a href="/" className="logo">Ride<span>Exchange</span></a>
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
          )}  </ul>
      </nav>


    </header>
  );
};

export default Navbar;


