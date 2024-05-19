import {React,useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css'; // Import the CSS file for styling
import LoadingSpinner from '../cards/LoadingSpinner'; // Import the LoadingSpinner component
function Sidebar() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
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
  return (
    <div className="sidebar">
    {loading && <LoadingSpinner />}
      <div className="sidebar-header">
        Admin Panel
      </div>
      <ul className="sidebar-menu">
        <li>
            <NavLink exact to ="/adminhome" activeClassName="active">
                Dashboard
            </NavLink>
        </li>
       
        <li>
            <NavLink exact to ="/bookings" activeClassName="active">
                Bookings
            </NavLink>
        </li>
       
        <li>
            <NavLink exact to ="/allusers" activeClassName="active">
                Users
            </NavLink>
        </li>
       
        <li>
        <button className="btn" onClick={handleLogout}>Logout</button>
        </li>
       
      </ul>
    </div>
  );
}

export default Sidebar;
