import {React, useState, useEffect, useContext} from 'react'
import Presentations from './Presentations'
import { GetSession, GetSessions, SetRoom } from '../../wailsjs/go/main/App'
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
    getRoomSessionData(room)
    // getSessions(room)
    
  }, [room])      
  const setRoomSessionData = (result) =>setSession(result)
  function getRoomSessionData(room){
    SetRoom(room).then(setRoomSessionData)
    setIndex(0)
  }

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
    // n+1 problem potentially here :(
    if (0 <= index && index < sessions.length){
      setIndex(index)
      setSelectedSession(sessions[index].ID)       
    }else{
      setIndex(0)
    }
    getSession(selectedSession)
  }

  // Need to add a handler, or adjust handleRoomChange()
    // that the current session is set to the first presentation AND session are set when the room changes.
    // Currently, the session is set by the back/next button on this Component

  // Back/Next button are having a n+1 error here Zzzz
  return (
    <div>
      
        <div className='session'>
          <div>
            <button onClick={(e)=>handleSessionChange(e, index-1)}>back</button>        
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