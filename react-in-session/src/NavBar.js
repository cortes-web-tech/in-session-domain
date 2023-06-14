import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import ListSessions from "./ListSessions";
import Session from "./Session";
import Session_Info from "./Session_Info";
import User from "./User";
import Users from "./Users";
import Login from "./Login";
import Logout from "./Logout";
import { useEffect, useState } from "react";

const NavBar = (props) => {
  const [loggedIn, setLoggedIn] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setLoggedIn(false);
    setUser("Masaomi");
  });
  return (
    <div>
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="ListSessions" element={<ListSessions />} />
            <Route path="Index" element={<Home />} />
            <Route path="Session/" element={<Session />} />
            <Route path="Session/:session_id" element={<Session />} />
            <Route path="SessionLink" element={<Session />} />
            <Route path="Session_Info/" element={<Session_Info />} />
            <Route path="User" element={<User />} />
            <Route path="Users" element={<Users />} />
            <Route path="Login" element={<Login />} />
            <Route path="Logout" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>

      {loggedIn ? (
        <div>
          {/*
         
      */}
        </div>
      ) : (
        <div>
          <div>Welcome to inSession</div>
          <div>{/* Please <Link to="/Login">Login</Link> to continue */}</div>
        </div>
      )}
    </div>
  );
};

export default NavBar;