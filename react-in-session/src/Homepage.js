import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Nav from "./Nav";
import "./App.css";
const Homepage = (props) => {
  const location = useLocation().state;
  const user = location;
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    getSessions();
  }, []);

  function getSessions() {
    axios.get("/api/getSessions.php").then(function (response) {
      if (response.data.error) {
        console.log("Error while getting data.");
      } else {
        setSessions(response.data);
      }
    });
  }

  return (
    <div>
      <Nav state={{ user }} />
      <div className="sessionDataContainer">
        <p>Viewing Sessions</p>

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
                  <Link
                    to="/Session"
                    state={{ session_id: session.session_id, user: user }}
                  >
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
    </div>
  );
};

export default Homepage;
