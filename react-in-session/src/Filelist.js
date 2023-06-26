import axios from "axios";
import { useState, useEffect } from "react";
import FileDownload from "js-file-download";
import "./App.css";
const Filelist = (props) => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    getFiles(props.state.id);
  }, []);

  function getFiles(id) {
    axios
      .post("/api/getFiles.php", { subsession_id: id })
      .then((response) => {
        setFiles(response.data);
      })
      .catch((err) => console.log(err));
  }

  const dl_fl = (e, filename) => {
    e.preventDefault();
    axios({
      url: "uploads/" + filename,
      method: "GET",
      responseType: "blob",
    })
      .then((response) => {
        FileDownload(response.data, filename);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <table className="fileList">
        <tbody>
          {files.map((file, key) => (
            <tr key={file.file_id}>
              <td>
                <button
                  onClick={(e) => dl_fl(e, file.filename)}
                  download={file.filename}
                >
                  {file.filename}
                </button>
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
