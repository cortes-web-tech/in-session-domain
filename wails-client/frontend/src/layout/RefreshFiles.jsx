import React, { useEffect, useState } from 'react'
import { RefreshFileList } from '../../wailsjs/go/main/App'
function RefreshFiles() {
  const [filelist, setFilelist] = useState()
  const [room, setRoom] = useState('Nerv HQ')
  useEffect(()=>{
    refreshFilesList(room)
  }, [])
  console.log(filelist)
  
  const updateFiles = (result) =>setFilelist(result)
  function refreshFilesList(room){
    RefreshFileList(room).then(updateFiles)
  }

return (
<div className='refreshFilesWrapper'>
  <div className='freshFilesGrid'>
    <div className='refreshFilesList'>
      File list + data checks will show here
    </div>
  </div>
</div>
)
}

export default RefreshFiles