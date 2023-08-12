import { useState,useEffect, React } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from "moment"
function SessionList() {
const [sessions, setSessions] = useState([]);
  useEffect(() => {
    getSessions();
  }, []);  

  function getSessions() {
    axios.get("http://localhost/api/getSessions.php").then(function (response) {
      if (response.data.error) {
        console.log("Error while getting data.");
      } else {
        setSessions(response.data);
      }
    });
  }


  return (
    <div className='p-2 bg-blue-800 rounded-md'>
        <table>
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
              <tr key={session.session_id} className='border-t-4 border-blue-500'>
                <td style={{columnSpan: 2}} className='border-r-4 border-blue-500 px-2'>                  
                <Link
                    to="/Session"
                    state={{ session_id: session.session_id }}
                    className="text-blue-400 underline underline-offset-2 hover:text-blue-500 "
                  >
                    {session.title}
                  </Link>                
                </td>
                <td className='pl-2'>{session.room}</td>
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