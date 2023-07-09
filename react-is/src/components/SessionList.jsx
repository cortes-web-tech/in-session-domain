import { useState,useEffect, React } from 'react';
import axios from 'axios';
import Moment from "moment"
function SessionList() {
const [sessions, setSessions] = useState([]);
  useEffect(() => {
    getSessions();
  }, []);

  function getSessions() {
    axios.get("http://localhost:80/api/getSessions.php").then(function (response) {
      if (response.data.error) {
        console.log("Error while getting data.");
      } else {
        setSessions(response.data);
      }
    });
  }


  return (
    <div>
        <table className="sessionsTable">
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
                    {session.title}
                  
                </td>
                <td>{session.room}</td>
                <td>{Moment(session.startTime).format("MM/DD/YY h:mmA")}</td>
                <td>{Moment(session.endTime).format("MM/DD/YY h:mmA")}</td>
                <td>{session.modName}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default SessionList