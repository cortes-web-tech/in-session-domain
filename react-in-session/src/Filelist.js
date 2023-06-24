import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Filelist = (props) => {
  const [files, setFiles] = useState([]);
  // setFiles()
  const location = useLocation();
  const subsesh = location.state;
  console.log(subsesh);
  useEffect(() => {
    setFiles(subsesh);
    getFiles(22);
  }, []);

  function getFiles(id) {
    axios
      .post("/api/getFiles.php", { subsession_id: id })
      .then((response) => {
        // console.log(response.data);
        setFiles(response.data);
      })
      .catch((err) => console.log(err));
  }
  return <div>file info will go here</div>;
};

export default Filelist;
