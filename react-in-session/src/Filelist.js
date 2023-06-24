import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Filelist = (props) => {
  const [files, setFiles] = useState([]);
  const location = useLocation();
  const subsesh = location.state;
  console.log(location.state);
  useEffect(() => {
    //setFiles(subsesh);
    getFiles(22);
  }, []);

  function getFiles(id) {
    axios
      .post("/api/getFiles.php", { subsession_id: id })
      .then((response) => {
        //console.log(response.data);
        setFiles(response.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      filelist
      <tbody>
        {files.map((file, key) => (
          <tr key={file.file_id}>{file.filename}</tr>
        ))}
      </tbody>
    </div>
  );
};

export default Filelist;
