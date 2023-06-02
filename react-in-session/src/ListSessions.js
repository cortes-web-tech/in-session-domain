import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function ListSessions() {
  var url;
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    getSessions();
  }, []);

  const [post, setPost] = useState({
    session_id: "",
  });

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

  function getSession_data(id, title) {
    var url = "Session_Info?session_id=" + id;
    axios
      .post("http://192.168.1.15/api/getSession.php", { id })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    // console.log(url);
    return url;
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
                {/* {(url = "Session_Info?session_id=" + session.session_id)} */}
                <a href={getSession_data(session.session_id)}>
                  {session.title}
                </a>
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
