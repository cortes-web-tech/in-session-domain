import axios from "axios";
import { useState, useEffect } from "react";
import FileDownload from "js-file-download";
import "./App.css";
const Filelist = (props) => {
  const subsession_id = props.state.id;
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

  const download_file = (e, filename) => {
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

  const upload_file = (e) => {};

  return (
    <div>
      <table className="fileList">
        <tbody>
          {files.map((file, key) => (
            <tr key={file.file_id}>
              <td className="FileDownload">
                <button
                  onClick={(e) => download_file(e, file.filename)}
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
      <div className="fileList">
        <form
          action={"uploadFile.php?id=" + subsession_id}
          method="post"
          enctype="multipart/form-data"
          id={subsession_id}
        >
          <label for="file">📂 </label>

          <button>Upload</button>
          <input type="file" id="file" name="file" />
        </form>
      </div>
    </div>
  );
};

export default Filelist;
