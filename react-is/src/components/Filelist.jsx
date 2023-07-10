import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
function Filelist() {
const location = useLocation();
const subsession_id = location.state.id;
const [subsessions, setSubsessions] = useState([]);
const [files, setFiles] = useState([]);

useEffect(()=>{
    // getFiles(props.state.id);
},[])
function getFiles(id) {
    axios
      .post("http://localhost:80/api/getFiles.php", { subsession_id: subsession_id })
      .then((response) => {
        setFiles(response.data);
<<<<<<< HEAD
        // console.log(response.data);
=======
>>>>>>> test
      })
      .catch((err) => console.log(err));
  }

return (
<div>
<<<<<<< HEAD
    Filelist WIP
=======
    
  { files != "" && files.length > 0 ? 
  <div>
    <table>
    <tbody>
      {files.map((file, key) => (
        <tr className="filelist" key={file.file_id}>
          <td className="filename">{file.file_name}</td>
          <td className="btnContainer">
            <button className="button" type="submit" name="submit" >
              🗂
            </button>
            <button className="button" type="submit" name="submit" >
              🗑
            </button>
          </td>             
        </tr>
        ))}
    </tbody>
    </table>
  </div>
  
  
  : <div>No files uploaded yet.</div> }
>>>>>>> test
</div>
)
}

export default Filelist