import {React, useState, useEffect, useContext} from 'react'
import Presentations from './Presentations'
import { GetSession } from '../../wailsjs/go/main/App'
import Moment from 'moment'
import { useLocation } from 'react-router-dom'
import { HeaderContext} from './context/HeaderContext'
import { SessionContext } from './context/SessionContext'
function Session() {
  const room = useContext(HeaderContext)
  const selectSession = useContext(SessionContext)
  console.log(selectSession)  
  const [session, setSession] = useState([])
  useEffect(()=>{
    getSession()
  }, [])
  const updateSession = (result) =>setSession(result)
  function getSession(){
    GetSession().then(updateSession)
  }
  return (
    <div>
      {selectSession}
        <div className='session'>
        <h1>{session.Title}</h1>    
        <h2>{session.Moderator}</h2>
        <h2>{Moment(session.StartTime).format("MM/DD/YY h:mmA")}</h2>    
        
        <h3>   {room}</h3>
        </div>
     
        <Presentations/>
    </div>
  )
}

export default Session