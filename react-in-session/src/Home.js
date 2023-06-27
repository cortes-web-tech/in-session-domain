import "./App.css";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Footer from "./Footer";
const Home = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <div>
        <h1>Welcome</h1>
        <p>Please log in to continue</p>
      </div>
      <div className="loginBox">
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
