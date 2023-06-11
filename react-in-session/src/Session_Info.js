import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Session_Info = (props) => {
  const sid = props.params;
  // console.log(sid);
  const [subsessions, setSubsessions] = useState([]);
  const [session, setSession] = useState([]);
  useEffect(() => {
    getSession_data();
  }, []);

  function getSession_data() {
    axios.get("/api/getSession.php", {}).then(function (response) {
      if (response.data.error) {
        console.log("Error while getting data.");
      } else {
        // console.log(response.data);
        setSubsessions(response.data);
      }
    });
  }
  return (
    <div>
      <div>
        <a href="">Click to load session data</a>
        {/* <p>{this.props.match.}</p> */}
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
                <td>{sid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Session_Info;
