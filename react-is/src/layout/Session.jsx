import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Moment from "moment";
import axios from "axios";
import Filelist from "../components/Filelist";
import CreatePresentation from "../components/CreatePresentation";
function Session() {
const location = useLocation();
const session_id = location.state.session_id;
const [subsessions, setSubsessions] = useState([]);
const [addingPresentation, setAddingPresentation] = useState(false)
useEffect(() => {
    getSession(session_id);
    // presentations()
  }, [subsessions]);
  // presentations()
  
  function presentations(e){
    if(subsessions.length == 0){
      setAddingPresentation(true)
    }
  }

  function getSession(id) {
    axios
      .post("http://localhost:80/api/getSession.php", { session_id: id })
      .then((response) => {
        setSubsessions(response.data)
        
      }
      )
      .catch((err) => console.log(err));
  }

  const togglePresentation = (e) =>{
  setAddingPresentation(!addingPresentation)
}
return <div>
  {addingPresentation ?
  <div>
    <CreatePresentation onDataFromChild={setAddingPresentation}/>
    <button className='bg-blue-500' onClick={(e)=>togglePresentation()}>View session</button>
  </div>
:

<div>
{subsessions.length > 0 ?
<div>
<h1>Session</h1>
<div className="bg-blue-800 flex justify-center rounded-md">  
<table>
  <tbody >
    <tr >
      <td>Presentation Title</td>
      <td>Presenter</td>
      <td>Start Time</td>
      <td>End Time</td>
      <td>Moderator</td>
    </tr>
    {subsessions.map((subsession, key) => (
    <tr key={subsession.subsession_id} className="border-t-4 align-top border-blue-500">
      <td className="pr-2 border-r-4 border-blue-500"> 
        <h4>{subsession.subsession_title} </h4>
        <br/> <Filelist state={{ id: subsession.subsession_id }} />
      </td>
      <td>
        <Link to="/User" state={{ user_id: subsession._user_id }}
         className="text-blue-400 underline underline-offset-2 hover:text-blue-500 px-1">
          {subsession.presenter}
        </Link>        
      </td>
      <td>{Moment(subsession.startTime).format("MM/DD/YY h:mmA")}</td>
      <td>{Moment(subsession.endTime).format("MM/DD/YY h:mmA")}</td>
      <td>{subsession.modName}</td>
    </tr>
    ))}
  </tbody>
</table>
</div>
<button className='bg-blue-500' onClick={(e)=>togglePresentation()}>add presentation</button>

</div>
:
<div>
  <h3>This session doesn't have any presentations. You can add manually below.</h3>
<button className='bg-blue-500' onClick={(e)=>togglePresentation()}>add presentation</button>
</div>
}

</div>
}

</div>;
}
export default Session