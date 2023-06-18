import { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
const Nav = (props) => {
  const [loggedIn, setLoggedIn] = useState([]);
  //   const [user, setUser] = useState([]);

  const user = props.state.user;
  //   console.log(user);<Nav state={{ user: user }} />
  //   setUser("Masaomi");
  return (
    <div>
      <nav className="nav">
        <ul className="leftNav">
          <li>
            <Link to="/" state={{ user }}>
              Home
            </Link>
          </li>
          {loggedIn ? (
            <li>
              <Link to="../ListSessions" state={{ user }}>
                Sessions
              </Link>
            </li>
          ) : (
            ""
          )}
          {loggedIn ? (
            <li>
              <Link to="../ViewUsers" state={{ user }}>
                Users
              </Link>
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
          <li>
            {loggedIn ? (
              "Hello " + user._firstName
            ) : (
              <Link to="Login">Login</Link>
            )}
          </li>
          <li>{loggedIn ? <Logout /> : ""}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
