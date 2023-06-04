import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
const User = (props) => {
  const [user, setUser] = useState([]);
  const location = useLocation();
  const user_id = location.state.user_id;

  useEffect(() => {
    getUser(user_id);
    // console.log(location);
  });

  function getUser(id) {
    axios
      .post("http://192.168.1.15/api/user.php/", { user_id: id })
      .then((response) => {
        // console.log(response.data);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="users_data">
      <div>Admin page: User Info</div>
      <div>
        <table className="sessionDataTable">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Organization</th>
              <th>Sessions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, key) => (
              <tr key={user.user_id}>
                <td>{user.fullName}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.organization}</td>
                <td>Function WIP</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
