import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // console.log(useLocation().state);

  function login() {
    if (password == "" || username == "") {
      setError("User name or password blank");
    } else {
      axios
        .post("http://192.168.1.15/api/login.php/", {
          uname: username,
          pw: password,
        })
        .then((response) => {
          console.log(response.data[0]);
          setUser(response.data[0]);
        })
        .catch((err) => console.log(err));

      // if (user) {
      // setTimeout(() => {
      navigate("../ListSessions", { user: user.user_id });
      // }, 1000);
      // }
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
          {error !== "" ? <span className="error">{error}</span> : ""}
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
          </div>
          <div>Register Function WIP</div>
        </div>
      </div>
    </div>
  );
};
export default Login;
