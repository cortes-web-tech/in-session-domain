import React, { useEffect, useState } from 'react'
import { RefreshFileList } from '../../wailsjs/go/main/App'
import Moment from 'moment'
function RefreshFiles() {
  const [filelist, setFilelist] = useState()
  const [room, setRoom] = useState('Nerv HQ')
  useEffect(()=>{
    refreshFilesList(room)
  }, [])
  
  
  const updateFiles = (result) =>setFilelist(result)
  function refreshFilesList(room){
    RefreshFileList(room).then(updateFiles)
  }

return (
<div className='refreshFilesWrapper'>
  <div className='freshFilesGrid'>
    <div className='refreshFilesList'>      
      {filelist.map((file,key)=>(
         <div key={file.ID} className='fileListItems'>
          <h1>{file.Name}</h1> 
          <h3>Last Modified: {Moment(file.Modified).format("MM/DD/YY h:mmA")}</h3>     
          <h3>Last Modified: {Moment(file.Synced).format("MM/DD/YY h:mmA")}</h3>     
        </div>
      ))}      
    </div>
  </div>
</div>
)
}

export default RefreshFiles