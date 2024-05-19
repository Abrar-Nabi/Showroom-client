import {React,useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css'; // Import the CSS file for styling

function Sidebar() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    setLoggedIn(false);
    
  };
  return (
    <div className="sidebar">
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
            <NavLink onClick={handleLogout} exact to ="/" activeClassName="active">
                Logout
            </NavLink>
        </li>
       
      </ul>
    </div>
  );
}

export default Sidebar;
