import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router,
  useLocation,
} from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Session = (props) => {
  const [session, setSession] = useState([]);
  const [subsessions, setSubsessions] = useState([]);
  const location = useLocation();
  const session_id = location.state.session_id;
  // console.log(session_id);
  useEffect(() => {
    getSesh(session_id);
  });
  function getSession() {
    axios
      .get("http://192.168.1.15/api/getSession.php")
      .then(function (response) {
        if (response.data.error) {
          console.log("Error while getting data.");
        } else {
          // console.log(response.data);
          setSession(response.data);
        }
      });
  }

  function getSession_data() {
    axios
      .get("http://192.168.1.15/api/getSession.php", {})
      .then(function (response) {
        if (response.data.error) {
          console.log("Error while getting data.");
        } else {
          // console.log(response.data);
          setSubsessions(response.data);
        }
      });
  }

  function getSesh(id) {
    axios
      .post("http://192.168.1.15/api/getSession.php", { session_id: id })
      .then((response) => setSubsessions(response.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="sessionDataContainer">
        <h3>Session Title</h3>
        <table className="sessionDataTable">
          <thead>
            <tr>
              <th>
                <h4>Subsession Title</h4>
              </th>
              <th>
                <h4>Presenter</h4>
              </th>
              <th>
                <h4>Start Time</h4>
              </th>
              <th>
                <h4>End Time</h4>
              </th>
              <th>
                <h4>Moderator</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {subsessions.map((subsession, key) => (
              <tr key={subsession.subsession_id}>
                <td>{subsession.subsession_title}</td>
                <td>{subsession.presenter}</td>
                <td>{subsession.startTime}</td>
                <td>{subsession.endTime}</td>
                <td>{subsession.modName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Session;
