
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Register = (props) => {

const [error, setError] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [email, setEmail] = useState("");


function reg_function() {
  if (
    username == "" ||
    password == "" ||
    confirmPassword == "" ||
    email == ""
    ) {
      setError("One or more fields were left blank");
  } else {
    axios
    .post("/api/register.php", { uname: username })
    .then((response) => {
       console.log(response);
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
      case "confirmPassword":
        setError("");
        setConfirmPassword(e.target.value);
        if (e.target.value == "") {
          setError("Confirm Password missing.");
        }
      break;
      case "email":
          setError("");
          setEmail(e.target.value);
          if (e.target.value == "") {
            setError("Email left blank.");
          }
          break;
    }
}
return(
<div>
  <div className="registrationWrapper">
  <div className="registrationContainer">
    <div className="registrationForm">
          <label>User name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => handleInputChange(e, "username")}
              placeholder="User name"
            />
	  <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => handleInputChange(e, "email")}
              placeholder="Email"
            />
	  <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => handleInputChange(e, "password")}
              placeholder="Password"
            />
	<label>Confirm Email</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e, "confirmPassword")}
              placeholder="Confirm password"
            />
            <input
              type="submit"
              defaultValue="Log in"
              id="login_button"
              onClick={reg_function}
            />
          </div>
  <Link to="/">Return to login</Link>
  </div>
  </div>
</div>
)
};

export default Register;
