import {React, useState, useEffect, useContext} from 'react'
import Presentations from './Presentations'
import { GetSession, GetSessions } from '../../wailsjs/go/main/App'
import Moment from 'moment'
import { HeaderContext} from './context/HeaderContext'
import { SessionContext } from './context/SessionContext'
function Session() {
  const room = useContext(HeaderContext)
  const [selectedSession, setSelectedSession] = useState(0)
  const [index, setIndex] = useState(0)
  const [session, setSession] = useState([])
  const [sessions, setSessions] = useState([])
  useEffect(()=>{
    handleRoomChange(room)
    getSessions(room)
    
  }, [room])    
  const updateSession = (result) =>setSession(result)
  function getSession(id){
    GetSession(id).then(updateSession)
  }
  const updateSessions = (result) => setSessions(result)
  function getSessions(room){
    GetSessions(room).then(updateSessions)
    // setSelectedSession(sessions[0].ID)
  }

  const handleRoomChange = (e) =>{
    getSessions(e)
  }
  const handleSessionChange = (e, index)=>{
    if (0 <= index && index < sessions.length){
      setIndex(index)
      setSelectedSession(sessions[index].ID)       
    }else{
      setSelectedSession(sessions[0].ID)
    }
    getSession(selectedSession)
  }
  return (
    <div>
      
        <div className='session'>
          <div>
            <button onClick={(e)=>handleSessionChange(e, index-1)}>back</button>
            {"    " + selectedSession + "    " }
            <button onClick={(e)=>handleSessionChange(e, index+1)}>next</button>

          </div>
        <h1>{session.Title}</h1>    
        <h2>{session.Moderator}</h2>
        <h2>{Moment(session.StartTime).format("MM/DD/YY h:mmA")}</h2>    
        
        <h3>   {room}</h3>
        </div>
     
        <Presentations session={selectedSession}/>
    </div>
  )
}

export default Session