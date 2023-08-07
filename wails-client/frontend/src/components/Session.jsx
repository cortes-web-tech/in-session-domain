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
    handleSessionChange()
    // getPresentations()
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

  const handleSessionChange = (e) => {
    // n+1 problem potentially here :(
      // Getting close to fixing it though!! Lfg!!!
      if(sessionContext == undefined){
        console.log()
      }else{              
        if (0 <= sessionContext && sessionContext < sessions.length) {      
          setIndex(sessionContext)
          setSelectedSession(sessions[sessionContext].ID)             
          // console.log(index)
          getPresentations(sessions[sessionContext].ID)
          console.log(presentations)
        }
        // Need to better when we switch to session where target.index < source.index
        // }else{
        //   setIndex(0)
        //   setSelectedSession(sessions[0].ID)       
        // }  
      }  
  }    

  const updatePresentations = (result) =>setPresentations(result)
  function getPresentations(id){
    GetPresentations(id).then(updatePresentations)
  } 
  return (
    <div>
      
        <div className='session'>  
        {sessions.length > 0 ?  
        <div>
        <h1>{sessions[index].Title}</h1>    
        <h2>{sessions[index].Moderator}</h2>
        <h2>{Moment(sessions[index].StartTime).format("MM/DD/YY h:mmA")}</h2>     
      </div>
      :
        "Loading.."              
      }      
        
      <h3>{room}</h3>
      </div>      
      {index > -1 ?                                
      "No presentations have been added to this session yet.":
      <Presentations session={sessions[index].ID}/>
      // ""            
      }
    </div>
  )
}

export default Session