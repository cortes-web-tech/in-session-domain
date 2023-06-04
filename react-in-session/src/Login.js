import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Login = (props) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // console.log(useLocation().state);

  function login() {
    console.log("user: " + username + " pw: " + password);

    axios
      .post("http://192.168.1.15/api/login.php/", {
        uname: username,
        pw: password,
      })
      .then((response) => {
        console.log(response.data);
        // setUser(response.data);
      })
      .catch((err) => console.log(err));
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
          {error !== "" ? <span className="error">{error}</span> : ""}
          <div className="loginForm">
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
          </div>
          <div>Register Function WIP</div>
        </div>
      </div>
    </div>
  );
};
export default Login;
