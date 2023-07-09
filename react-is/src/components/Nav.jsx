import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return <div className="nav">
    <Link to="/">Home</Link>
    <Link to="/Dashboard">Dashboard</Link>
    <Link to="/Sessions">Sessions</Link>
    <Link to="/Users">Users</Link>
  </div>;
}

export default Nav;
