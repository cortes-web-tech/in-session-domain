import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Register = (props) => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="registrationWrapper">
        <div className="registrationContainer">
          <div className="registrationForm">
            Registration is not available at this time.
          </div>
          <Link to="/">Return to login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
