import {React, useState, useEffect, useContext} from 'react'
import Moment from 'moment'
import {  GetSessions } from '../../wailsjs/go/main/App'
import { HeaderContext } from './context/HeaderContext'
import { SessionContext } from './context/SessionContext'

function FooterLeft({onDataFromChild}) {
  const selectRoom = useContext(HeaderContext)
  const selectSession = useContext(SessionContext)
  const [sessions, setSessions] = useState([]);
  const [index, setIndex] = useState(0)
  const [session, setSession] = useState(0)
  useEffect(()=>{
    handleRoomChange(selectRoom)
    
  },[selectRoom])

  const updateSessions = (result) => setSessions(result)
  function getSessions(room){
    GetSessions(room).then(updateSessions)
  }
  const handleRoomChange = (e) => {
    getSessions(e)
  
  }  
  const handleSessionChange = (e, index)=>{  
    if (0 <= index && index < sessions.length){
      setIndex(index)
      setSession(sessions[index].ID)
      onDataFromChild(index)      
    }else{
      setSession(sessions[0].ID)
    }
  }
  return (    
      <div className='leftFooter'>           
      <div className='flex-content'>      
        { index > 0 ?
        <div className='navButton'>
          <button  onClick={(e)=>handleSessionChange(e, index-1)}> previous </button> 
        </div>
        : "" }
          
      </div>
      <div className='flex-content'>        
        {sessions.length > 0 ? Moment(sessions[index].StartTime).format("dddd MM/DD hh:mm A") :"" }
      </div>
      <div className='flex-content'>
        {index < sessions.length - 1 ?
        <div className='navButton'>
          <button  onClick={(e)=>handleSessionChange(e, index+1)}>next</button>
        </div>
        : "" }
        
      </div>
      </div>
  )
}

export default FooterLeft