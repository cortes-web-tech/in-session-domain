import axios from "axios";
import { useState, useEffect } from "react";
const Filelist = (props) => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    //setFiles(subsesh);
    getFiles(props.state.id);
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
      <tbody>
        {files.map((file, key) => (
          <tr key={file.file_id}>{file.filename}</tr>
        ))}
      </tbody>
    </div>
  );
};

export default Filelist;
