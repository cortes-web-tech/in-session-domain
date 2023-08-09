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
    <div>
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
  )
}

 

export default FileList