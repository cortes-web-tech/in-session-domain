import React, { useContext, useEffect, useState } from 'react'
import { RefreshFileList } from '../../wailsjs/go/main/App'
import { HeaderContext } from '../components/context/HeaderContext'
import Moment from 'moment'
function RefreshFiles() {
  const room = useContext(HeaderContext)
  const [filelist, setFilelist] = useState()
  // const [room, setRoom] = useState('Nerv HQ')
  useEffect(()=>{
    refreshFilesList(room)
  }, [room])
  const updateFiles = (result) =>setFilelist(result)
  function refreshFilesList(room){
    RefreshFileList(room).then(updateFiles)
  }
return (
<div className='refreshFilesWrapper'>
  <div className='freshFilesGrid'>
    <div className='refreshFilesList'>
      {filelist == undefined ? "files loading":
      filelist.map((file,key)=>(
        <div key={file.ID} className='fileListItems'>
         <h1>{file.Name}</h1> 
         <h3>Modified: {Moment(file.Modified).format("MM/DD/YY h:mmA")}</h3>
         <h3>Synced: {Moment(file.Synced).format("MM/DD/YY h:mmA")}</h3>
       </div>
     ))
      }      
    </div>
  </div>
</div>
)
}

export default RefreshFiles