import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SessionLink from "./SessionLink";

export default function ListSessions() {
  var url;
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    getSessions();
  }, []);

  const [session, setSession] = useState({
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
    var url = "Session";
    /*
    axios
      .post("http://192.168.1.15/api/getSession.php", { session_id: id })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    */
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
            <th>Moderator</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, key) => (
            <tr key={session.session_id}>
              <td>
                {/* 
                <a
                  href={getSession_data(session.session_id)}
                  params={{ session_id: session.session_id }}
                >
                  {session.title}
                </a>
      */}
                <SessionLink
                  session_id={session.session_id}
                  title={session.title}
                  // session_id: session.session_id,
                  // title: session.title,
                />

                {/* 
                <Link to="/Session" params={{ session_id: session.session_id }}>
                  {session.title}
                </Link>
                

                <Link
                  to={{
                    pathname: "Sesssion",
                    // state: session.session_id,
                  }}
                >
                  {session.title}
                </Link>
                 */}
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
}
