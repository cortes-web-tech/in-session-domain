import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Filelist(props) {
const subsession_id = props.state // won't let me add .id on init
const [files, setFiles] = useState([]);
useEffect(()=>{
    getFiles(subsession_id);
}, [])

function getFiles(id) {
    axios
      .post("http://localhost:80/api/getFiles.php", { subsession_id: id })
      .then((response) => {
        setFiles(response.data);
      })
      .catch((err) => console.log(err));
  }
return (
<div className="min-w-fit"> 
  { files != "" && files.length > 0 ? 
  <div className= "min-w-max">        
      {files.map((file, key) => (
        <div key={file.file_id} className="flex min-w-fit">
          <div className="flex-1">{file.file_name}</div>
          <div>
            <button className="hover:bg-green-400 flex-1" type="submit" name="submit" title="Upload File">
              🗂
            </button>
            <button className="hover:bg-red-400 flex-1" type="submit" name="submit" title="Delete File">
              🗑
            </button>
          </div>             
        </div>
      ))}  
  </div>
  : 
  <div>No files uploaded yet.</div> }
</div>
)
}

export default Filelist