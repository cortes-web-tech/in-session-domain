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
        // console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

return (
<div>
    Filelist WIP
</div>
)
}

export default Filelist