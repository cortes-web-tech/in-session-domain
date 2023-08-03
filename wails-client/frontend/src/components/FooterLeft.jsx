import {React, useState, useEffect, useContext} from 'react'
import Moment from 'moment'
import {  GetSessions } from '../../wailsjs/go/main/App'
import { HeaderContext } from './context/HeaderContext'
import { lazy } from 'react'

function FooterLeft() {
  const selectRoom = useContext(HeaderContext)
  const [sessions, setSessions] = useState([]);
  const [day, setDay] = useState(0)
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
  
  const handleSessionChange = (e, day)=>{
    if (0 <= day && day < sessions.length){
      setDay(day)
    }    
  }

  return (    
      <div className='leftFooter'>     
      <div className='flex-content'>      
          <button onClick={(e)=>handleSessionChange(e, day-1)}> previous </button>
      </div>
      <div className='flex-content'>        
        {sessions.length > 0 ? Moment(sessions[day].StartTime).format("dddd MM/DD hh:mm A") :"" }
      </div>
      <div className='flex-content'>
        <button onClick={(e)=>handleSessionChange(e, day+1)}>next</button>
      </div>
      </div>
  )
}

export default FooterLeft