import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import SessionLink from "./SessionLink";

const ListSessions = (props) => {
  const location = useLocation().state;

  console.log(location);
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    getSessions();
  }, []);

  function getSessions() {
    axios
      .get("http://192.168.1.15/api/getSessions.php")
      .then(function (response) {
        if (response.data.error) {
          console.log("Error while getting data.");
        } else {
          setSessions(response.data);
        }
      });
  }

  return (
    <div className="sessionDataContainer">
      <p>Sessions</p>

      <table className="sessionDataTable">
        <thead>
          <tr>
            <th>Session Title</th>
            <th>Room</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Moderator</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, key) => (
            <tr key={session.session_id}>
              <td>
                <Link to="/Session" state={{ session_id: session.session_id }}>
                  {session.title}
                </Link>
              </td>
              <td>{session.room}</td>
              <td>{session.startTime}</td>
              <td>{session.endTime}</td>
              <td>{session.modName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSessions;
