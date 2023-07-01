import React, { useState } from "react";
import Nav from "./Nav";

const CreateUser = (props) => {
  const [user_name, setUser_name] = useState([]);
  const [email, setEmail] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [error, setError] = useState([]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "user_name":
        setError("");
        setUser_name(e.target.value);
        if (e.target.value === "") {
          setError("User name left blank.");
        }
        break;
    }
  };

  function createNewUser() {}
  return (
    <div>
      <Nav />
      <div className="createUser">
        <div>
          <label>User name </label>
          <input
            type="text"
            value={user_name}
            onChange={(e) => handleInputChange(e, "user_name")}
            placeholder="User name"
          />
        </div>
        <div>
          <label> Email </label>
          <input
            type="text"
            value={email}
            onChange={(e) => handleInputChange(e, "email")}
            placeholder="Room"
          />
        </div>
        <div>
          <label> First Name </label>

          <input
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e, "firstName")}
            placeholder="First Name"
          />
        </div>
        <div>
          <label className="hiddenDot">.</label>
          <input
            type="submit"
            defaultValue="submit"
            id="login_button"
            onClick={createNewUser}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
