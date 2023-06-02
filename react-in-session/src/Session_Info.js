import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Session_Info() {
  const [subsessions, setSubsessions] = useState([]);
  const [session, setSession] = useState([]);
  useEffect(() => {
    getSession_data();
  }, []);

  function getSession_data() {
    axios
      .get("http://192.168.1.15/api/getSession.php", {})
      .then(function (response) {
        if (response.data.error) {
          console.log("Error while getting data.");
        } else {
          // cnso
          setSubsessions(response.data);
        }
      });
  }
  return (
    <div>
      <div>
        <a href="">Click to load session data</a>
      </div>
      <div>
        <table className="sessionDataTable">
          <thead>
            <tr>
              <th>Subsession Title</th>
              <th>Presenter</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Moderator</th>
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
}
