import {React, useState, useEffect, useContext, useRef} from 'react'
import Moment from 'moment'
import {  GetSessions } from '../../wailsjs/go/main/App'
import { HeaderContext } from './context/HeaderContext'

function FooterLeft() {
  const selectRoom = useContext(HeaderContext)
  const [sessions, setSessions] = useState([]);
  useEffect(()=>{
    handleChange(selectRoom)
    // sortByTimestamp()
  },[selectRoom], [sessions])

  const updateSessions = (result) => setSessions(result)
  function getSessions(room){
    GetSessions(room).then(updateSessions)
  }
  const handleChange = (e) => {
    getSessions(e)
    // sessions.sort((a,b) => a.StartTime - b.StartTime)
  }

  const sortByTimestamp = () =>{
    const sortedData = [...sessions].sort((a,b) => a.StartTime - b.StartTime)
    console.log(sortedData)
    setSessions(sortedData)
  }

  return (    
      <div className='leftFooter'>     
      <div className='flex-content'>
          <button > previous </button>
      </div>
      <div className='flex-content'>    
        {sessions.map((session, key)=>(
        <div key={session.ID} className='bg-red-500'>{Moment(session.StartTime).format("MM/DD dddd ")}</div>
        ))}
      </div>
      <div className='flex-content'>
        <button>next</button>
      </div>
      </div>
  )
}

export default FooterLeft