import React, { useContext, useEffect, useState } from 'react'
import { GetSessions, GetPresentations } from '../../wailsjs/go/main/App'
import { HeaderContext } from '../components/context/HeaderContext'
import PresentationList from '../components/PresentationList'
import Moment from 'moment'
function RefreshFiles() {
  const room = useContext(HeaderContext)    
  const [sessions, setSessions] = useState([])  
  useEffect(()=>{
    getSessions(room)
    
  }, [room])  
  const updateSessions = (result) => setSessions(result)
  function getSessions(room){
    GetSessions(room).then(updateSessions)
  }
return (
    <div className='refreshFilesWrapper'>      
      {sessions.length > 0 ?
      sessions.map((session, key)=>(
        <div key={session.ID} className='refreshFilesList'>
          <div className='fileListSession'>
            <h1>{session.Title} <br/>
            {Moment(session.StartTime).format("MM/DD/YY h:mmA")} - {Moment(session.EndTime).format("MM/DD/YY h:mmA")}</h1>            
          </div>
          <div className='fileListPresentation'>
            <PresentationList session={session.ID} />
          </div>
        </div>
      ))
      :
      ""  
    }
      {/* {filelist == undefined ? "files loading":
      filelist.map((file,key)=>(
        <div key={file.ID} className='fileListItems'>
         <h1>{file.Name}</h1> 
         <h3>Modified: {Moment(file.Modified).format("MM/DD/YY h:mmA")}</h3>
         <h3>Synced: {Moment(file.Synced).format("MM/DD/YY h:mmA")}</h3>
       </div>
     ))
      }       */}
    </div>
  
)
}

export default RefreshFiles