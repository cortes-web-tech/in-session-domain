import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function User() {
    const location = useLocation();
    const user_id = location.state.user_id;
    return <div className="pageLayout">
    <Nav/>
    <div className="content">  
      <h1>User</h1>
      
    </div>
    <Footer/>  
  </div>;
}

export default User