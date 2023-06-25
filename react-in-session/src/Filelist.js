import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
const Filelist = (props) => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    //setFiles(subsesh);
    getFiles(props.state.id);
  }, []);
  // echo "<a href='../downloadFile.php?file=$filename'>" . $filename . "</a></br>";
  function getFiles(id) {
    axios
      .post("/api/getFiles.php", { subsession_id: id })
      .then((response) => {
        //console.log(response.data);
        setFiles(response.data);
      })
      .catch((err) => console.log(err));
  }

  function dl_fl(filename) {
    filename = "/api/downloadFile.php?file=" + filename;
    console.log(filename);
  }

  return (
    <div>
      <tbody>
        {files.map((file, key) => (
          <tr key={file.file_id}>
            <div className="fileList">
              <div className="fileDownload">
                <a
                  href={"/api/downloadFile.php?file=" + file.filename}
                  onClick={dl_fl(file.filename)}
                  download={file.filename}
                >
                  {file.filename}
                </a>
              </div>
              <a> 🗑</a>
            </div>
          </tr>
        ))}
        <div className="fileList">upload 📂</div>
      </tbody>
    </div>
  );
};

export default Filelist;
