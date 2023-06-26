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
    axios
      .post("/api/downloadFile.php", { file: filename })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <table className="fileList">
        <tbody>
          {files.map((file, key) => (
            <tr key={file.file_id}>
              <td className="fileDownload">
                <a onClick={dl_fl(file.filename)}>{file.filename}</a>
              </td>

              <td>
                <a> 🗑</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="fileList">upload 📂</div>
    </div>
  );
};

export default Filelist;
