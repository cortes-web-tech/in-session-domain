import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
          //console.log(response.data);
          setSessions(response.data);
        }
      });
  }

  function getSession_data(id, title) {
    var url = "<a href='Session_Info?session_id=" + id + ">" + title + "</a>";

    console.log(url);
    // return url;
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
            <th>SessionId</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, key) => (
            <tr key={session.session_id}>
              <td>
                {getSession_data(session.session_id, session.title)}
                <a href="Session_Info">{session.title}</a>
              </td>
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
