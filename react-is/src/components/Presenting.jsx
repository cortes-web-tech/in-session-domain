import { useState, useEffect } from "react";
import axios from "axios";
import Filelist from "./Filelist";
import { useLocation } from "react-router-dom";
// 1) presentingIn
// 2) Add <Filelist state=subsession_id>
function Presenting(props) {
  const location = useLocation();
  const [subsessions, setSubsessions] = useState([]);
  const id = location.state.user_id
  const name = location.state.name
  useEffect(()=>{
    presentingIn(id)
    }, [])  
    

  function presentingIn(id) {
    axios
      .post("http://localhost/api/presentingIn.php", { user_id: name })
      .then((response) => {        
        setSubsessions(response.data)
      })
      .catch((err) => console.log(err));
  }
return (
<div>
  {subsessions.length > 0 ?
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
      <tr key={subsession.subsession_id} className="align-top border-t-4 border-blue-500">
        <td className="border-r-4 border-blue-500">{subsession.subsession_title}
        <br/> <Filelist state={{ id: subsession.subsession_id }} />
        </td>
        <td className="pl-2">{subsession.startTime}</td>
        <td>{subsession.endTime}</td>
        <td>{subsession.modName}</td>
      </tr>
    ))}
    </tbody>
  </table>
  </div>
  :
  <div>
    <h2>No presentations assigned to this user.</h2>
    <small>checkMod() WIP™️</small>
  </div>
}
    
    </div>
  )
}

export default Presenting