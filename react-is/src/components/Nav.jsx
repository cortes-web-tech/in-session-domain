import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return <div className="flex min-w-max">
    <div className="flex-1"><Link to="/">Home</Link></div>
    <div className="flex-1"><Link to="/Dashboard">Dashboard</Link></div>
    <div className="flex-1"><Link to="/Sessions">Sessions</Link></div>
    <div className="flex-1"><Link to="/Users">Users</Link></div>
  </div>;
}

export default Nav;
