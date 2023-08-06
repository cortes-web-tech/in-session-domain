import {React, useState, useEffect, useContext} from 'react'
import Presentations from './Presentations'
import { GetSession, GetSessions, SetRoom, GetPresentations, StartPresentation } from '../../wailsjs/go/main/App'
import Moment from 'moment'
import { HeaderContext} from './context/HeaderContext'
import { SessionContext } from './context/SessionContext'
import { WindowReload} from '../../wailsjs/runtime'
function Session() {
  const room = useContext(HeaderContext)
  const sessionContext = useContext(SessionContext)
  const [selectedSession, setSelectedSession] = useState(0)
  const [index, setIndex] = useState(0)
  const [session, setSession] = useState([])
  const [sessions, setSessions] = useState([])
  const [presentations, setPresentations] = useState([]);      
  
  useEffect(()=>{  
    getSessions(room)
    handleRoomChange(room)
    getRoomSessionData(room)    
    // handleSessionChange(sessionContext)
    // getPresentations(sessions[index].ID)
  }, [room, sessionContext])  
  const setRoomSessionData = (result) =>setSession(result)
  function getRoomSessionData(room){
    SetRoom(room).then(setRoomSessionData)
    setIndex(0)    
    WindowReload
    // setSelectedSession(sessions[index].ID)   
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
    setIndex(0)          
    WindowReload
    // handleSessionChange(sessionContext)    
    // handleSessionChange(0)
    // setSelectedSession(sessions[index].ID)   
  }

  const handleSessionChange = (e)=>{
    // n+1 problem potentially here :(
    if (0 <= e && e < sessions.length){      
      setIndex(e)
      setSelectedSession(sessions[e].ID)             
    }else{
      setIndex(0)
      setSelectedSession(sessions[0].ID)       
    }  
    getSession(selectedSession)
  }    

  const updatePresentations = (result) =>setPresentations(result)
  function getPresentations(id){
    GetPresentations(id).then(updatePresentations)
  } 
  return (
    <div>
      
        <div className='session'>  
        {sessions.length < 1 ? "Loading.." : 
        <div>
        <h1>{sessions[index].Title}</h1>    
        <h2>{sessions[index].Moderator}</h2>
        <h2>{Moment(sessions[index].StartTime).format("MM/DD/YY h:mmA")}</h2>     
      </div>
      }      
        
        <h3>{room}</h3>
        </div>      
        {presentations.length > 0 ?        
        <Presentations session={sessions[index].ID}/>
      : "No presentations have been added to this session yet."}                
    </div>
  )
}

export default Session