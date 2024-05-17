import React from "react";
import Sidebar from "../cards/sidebar";
import Dashboard from "./Dashboard"
import "../styles/adminhome.css"
const AdminHome = () => {
  return (
    <div className="admin-home">
    
      <Sidebar/>
      <Dashboard/>
    </div>
  );
};

export default AdminHome;
