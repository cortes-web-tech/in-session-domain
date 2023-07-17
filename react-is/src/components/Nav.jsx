import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return <div className="flex min-w-max text-center">
    <div className="flex-1"><Link to="/" className="text-white hover:text-blue-500">Home</Link></div>
    <div className="flex-1"><Link to="/Dashboard" className="text-white hover:text-blue-500">Dashboard</Link></div>
    <div className="flex-1"><Link to="/Sessions" className="text-white hover:text-blue-500">Sessions</Link></div>
    <div className="flex-1"><Link to="/Users" className="text-white hover:text-blue-500">Users</Link></div>
  </div>;
}

export default Nav;
