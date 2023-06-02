import { useState, useEffect, initialState } from "react";
import axios from "axios";

export default function ListSessions() {
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
          console.log(response.data);
          setSessions(response.data);
        }
      });
  }

  return (
    <div class="sessionDataContainer">
      <p>Sessions</p>

      <table class="sessionDataTable">
        <thead>
          <tr>
            <th>Session Title</th>
            <th>Room</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>SessionId</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, key) => (
            <tr key={session.session_id}>
              <td>{session.title}</td>
              <td>{session.room}</td>
              <td>{session.startTime}</td>
              <td>{session.endTime}</td>
              <td>{session.session_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
