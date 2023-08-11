import { useState, useEffect, React } from 'react'
import { RefreshFileList } from '../../wailsjs/go/main/App'
import Moment from 'moment'
function FileList(props) {
    const [filelist, setFileList] = useState([])
    useEffect(()=>{
        getFileList()
    },[props])    
    const updateFileList = (result) =>setFileList(result)
    function getFileList(){
    RefreshFileList(props.id).then(updateFileList)
    }
  return (
    <div className='fileListWrapper'>
    {filelist == undefined ? "files loading":
      filelist.length > 0 ?
      filelist.map((file,key)=>(
        <div key={file.ID} className='fileListItems'>
         <h2>{file.Name}</h2> 
         <h3>Modified: {Moment(file.Modified).format("MM/DD/YY h:mmA")}
        <br/>
         Synced: {Moment(file.Synced).format("MM/DD/YY h:mmA")}</h3>
       </div>
     )):
     <div className='noFilesUploaded'>No files have been uploaded <br/>for this presentation.</div>
      }          
    </div>
  )
}

 

export default FileList