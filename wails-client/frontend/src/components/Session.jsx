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
  const [index, setIndex] = useState(0)
  const [session, setSession] = useState([])
  const [sessions, setSessions] = useState([])
  
  useEffect(()=>{  
    getSessions(room)
    handleRoomChange(room)
    handleSessionChange()
    getRoomSessionData(room)                
    presentationHandler(sessions)        
    if(sessionContext !=undefined){            
      setIndex(sessionContext)  
    }
  }, [room, sessionContext])    

  const setRoomSessionData = (result) =>setSession(result)
  function getRoomSessionData(room){
    SetRoom(room).then(setRoomSessionData)
    setIndex(0)      
  }
  
  const updateSessions = (result) => setSessions(result)
  function getSessions(room){
    GetSessions(room).then(updateSessions)
  }

  const handleRoomChange = (e) =>{
    getSessions(e)
    setIndex(0)                  
  }

  function handleSessionChange()  {
    // n+1 problem potentially here :(
      // Getting close to fixing it though!! Lfg!!!
      if(sessionContext != undefined){
        if (0 <= sessionContext && sessionContext < sessions.length) {                
          setIndex(sessionContext)
        }
      }else{
        setIndex(0)
      }                
  }    

  function presentationHandler(){
      if(sessions.length >0 ){
        if(sessionContext == undefined){        
        return sessions[index].ID        
      }      
    }
  }  
  
  return (
    <div>
        <div className='session'>  
        {sessions.length > 0 ?  
        <div>
        <h1>{sessions[index].Title}</h1>    
        <h2>{sessions[index].Moderator}<br/>
        {Moment(sessions[index].StartTime).format("MM/DD/YY h:mmA")}<br/>
        {room}</h2>
      </div>
      :
        ""              
      }        
      </div>    
      {sessions.length > 0 ?                                
      <Presentations session={sessions[index].ID}/>
      :      
      ""            
      }
    </div>
  )
}

export default Session