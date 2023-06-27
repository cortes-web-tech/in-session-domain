import { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
const Nav = (props) => {
  const [loggedIn, setLoggedIn] = useState([]);
  //   const [user, setUser] = useState([]);

  //const user = props.state.user;
  //   console.log(user);<Nav state={{ user: user }} />
  //   setUser("Masaomi");
  return (
    <div>
      <nav className="nav">
        <ul className="leftNav">
          <li>
            <Link to="/Homepage">Home</Link>
          </li>
          {loggedIn ? (
            <li>
              <Link to="/Sessions">Sessions</Link>
            </li>
          ) : (
            ""
          )}
          {loggedIn ? (
            <li>
              <Link to="/Users">Users</Link>
            </li>
          ) : (
            ""
          )}
        </ul>
        <ul className="rightNav">
          {loggedIn ? (
            <li>
              <a href="">Profile</a>
            </li>
          ) : (
            ""
          )}
          <li>{loggedIn ? "Hello " : <Link to="Login">Login</Link>}</li>
          <li>{loggedIn ? <Logout /> : ""}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
