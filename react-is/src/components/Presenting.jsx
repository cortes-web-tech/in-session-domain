import { useState, useEffect } from "react";
import axios from "axios";
import Filelist from "./Filelist";
// 1) presentingIn
// 2) Add <Filelist state=subsession_id>
function Presenting(props) {
  const [subsessions, setSubsessions] = useState([]);
  useEffect(()=>{
    presentingIn(props.state.user_id)
    }, [])
  console.log(props.state.user_id);
  function presentingIn(id) {
    axios
      .post("http://localhost/api/presentingIn.php", { user_id: id })
      .then((response) => setSubsessions(response.data))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h2>Presenting</h2>
      <table>
        <tbody>
            <tr>
                <td>Subsession title</td>
                <td>Start time</td>
                <td>End time</td>
                <td>Moderator</td>
            </tr>
        {subsessions.map((subsession, key)=> (
          <tr key={subsession.subsession_id}>
            <td>{subsession.subsession_title}
            <br/> <Filelist state={{ id: subsession.subsession_id }} />
            </td>
            <td>{subsession.startTime}</td>
            <td>{subsession.endTime}</td>
            <td>{subsession.modName}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Presenting