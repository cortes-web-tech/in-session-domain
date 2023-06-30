import axios from "axios";
import { useState, useEffect } from "react";
import { redirect, useLocation, useNavigate, Link } from "react-router-dom";
import Register from "./Register";
const Login = (props) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  function login() {
    if (password == "" || username == "") {
      setError("User name or password blank");
    } else {
      axios
        .post("/api/login.php/", {
          uname: username,
          pw: password,
        })
        .then((response) => {
          if (response.data < 1) {
            setError("User not found. Please try login again.");
          } else {
            setUser(response.data);
            navigate("/Homepage", { state: response.data });
          }
        })
        .catch((err) => console.log(err));
    }
  }

  const handleInputChange = (e, type) => {
    switch (type) {
      case "username":
        setError("");
        setUsername(e.target.value);
        if (e.target.value === "") {
          setError("Username blank.");
        }
        break;
      case "password":
        setError("");
        setPassword(e.target.value);
        if (e.target.value == "") {
          setError("Password blank.");
        }
        break;
    }
  };
  return (
    <div>
      <div className="loginWrapper">
        <div className="loginContainer">
          {toggle ? (
            <Link to="/Register">Register</Link>
          ) : (
            <div className="loginForm">
              {user ? "Redirecting" : ""}
              <label>User name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => handleInputChange(e, "username")}
                placeholder="User name"
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => handleInputChange(e, "password")}
                placeholder="Password"
              />
              <input
                type="submit"
                defaultValue="Log in"
                id="login_button"
                onClick={login}
              />
              Log In
              <Link to="/Register">Register</Link>
            </div>
          )}
          {error !== "" ? <span className="error">{error}</span> : ""}
        </div>
      </div>
    </div>
  );
};
export default Login;
