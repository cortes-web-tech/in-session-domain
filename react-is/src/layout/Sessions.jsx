import {React, useState, useEffect} from 'react'

import SessionList from '../components/SessionList';
import CreateSession from '../components/CreateSession';
function Sessions() {
const [addingSession, setAddingSession] = useState(false)

const toggleAddSession = (e) =>{
  setAddingSession(!addingSession)
}

return <div className='flex justify-center'>
  <div>  
    {addingSession ?
    <div>
      <h1>Add a new session</h1>
      <CreateSession onDataFromChild={setAddingSession}/>
      <button className='bg-blue-500' onClick={(e)=>toggleAddSession()}>View sessions</button>
    </div>
    :
    <div>
      <h1>Sessions</h1>
      <SessionList/>
      <button className='bg-blue-500' onClick={(e)=>toggleAddSession()}>add session</button>
    </div>
    }
    
  </div>
  
</div>;
}

export default Sessions