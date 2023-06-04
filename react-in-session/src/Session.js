import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Session = (props) => {
  const [session, setSession] = useState([]);
  const [subsessions, setSubsessions] = useState([]);
  const location = useLocation();
  const session_id = location.state.session_id;
  useEffect(() => {
    setInterval(() => {
      getSession(session_id);
    }, 500);
  });

  function getSession(id) {
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
};

export default Session;
