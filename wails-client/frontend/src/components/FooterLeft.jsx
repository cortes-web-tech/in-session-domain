import {React, useState, useEffect, useContext, useRef} from 'react'
import Moment from 'moment'
import {  GetSessions } from '../../wailsjs/go/main/App'
import { HeaderContext } from './context/HeaderContext'
function FooterLeft() {
  const selectRoom = useContext(HeaderContext)
  const [sessions, setSessions] = useState([]);
  useEffect(()=>{
    handleChange(selectRoom)
  },[selectRoom])
  console.log(sessions)
  const updateSessions = (result) => setSessions(result)
  function getSessions(room){
    GetSessions(room).then(updateSessions)
  }
  const handleChange = (e) => {
    getSessions(e)
  }
  return (
    <div>
      
      {sessions.length}
      
      <div>        
        <button> previous </button>
        {Moment(Date.now()).format(" dddd  ")}
        {sessions.map((session, key)=>(
          <div key={session.ID}>{session.StartTime}</div>
        ))}
        <button>next</button>
      </div>
    </div>
  )
}

export default FooterLeft