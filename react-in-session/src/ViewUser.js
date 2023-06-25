import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Filelist from "./Filelist";
const ViewUser = (props) => {
  const [user, setUser] = useState([]);
  const [subsessions, setSubsessions] = useState([]);
  const [files, setFiles] = useState([]);
  const [filename, setFilename] = useState([]);
  const location = useLocation();
  const user_id = location.state.user_id;
  useEffect(() => {
    getUser(user_id);
    presentingIn(user_id);
  }, []);

  function getUser(id) {
    axios
      .post("/api/user.php/", { user_id: id })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }

  function presentingIn(id) {
    axios
      .post("/api/presentingIn.php", { user_id: id })
      .then((response) => setSubsessions(response.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="users_data">
      <Nav />
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
              <th>User tier</th>
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
                <td>{user.user_tier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        Presenting in
        <table className="sessionDataTable">
          <tr>
            <th>Session name</th>
            <th>Session time</th>
            <th>Moderator</th>
          </tr>
          <tbody>
            {subsessions.map((subsession, key) => (
              <tr key={subsession.subsession_id}>
                <td>
                  {subsession.subsession_title}
                  <br />
                  <div>
                    <tbody>
                      <Filelist state={{ id: subsession.subsession_id }} />
                    </tbody>
                  </div>
                </td>
                <td>{subsession.startTime}</td>
                <td>{subsession.modName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUser;
