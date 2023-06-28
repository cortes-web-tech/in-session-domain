import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import "./App.css";
const Homepage = (props) => {
  const location = useLocation().state;
  const user = location;
  const [sessionCount, setSessionCount] = useState(0);
  const [sessionFileCount, setSessionFileCount] = useState(2);
  const [sessionPercent, setSessionPercent] = useState(0);
  const [subsessionCount, setSubsessionCount] = useState(0);
  const [subsessionPercent, setSubsessionPercent] = useState(0);
  const [subsessionFileCount, setSubsessionFileCount] = useState(0);

  const [roomCount, setRoomCount] = useState(0);
  const [fileCount, setFileCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [fileData, setFileData] = useState([]);
  useEffect(() => {
    countSessions();
    countSubSessions();
    countRooms();
    countUsers();
    countFiles();
    getFileData();
    countSubsessionFiles();
    countSessionFiles();
  }, []);

  function countSessions() {
    axios
      .post("/api/countSessions.php")
      .then((response) => {
        setSessionCount(response.data["COUNT(*)"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function countSubSessions() {
    axios
      .post("/api/countSubSessions.php")
      .then((response) => {
        setSubsessionCount(response.data["COUNT(*)"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function countRooms() {
    axios
      .post("/api/countRooms.php")
      .then((response) => {
        setRoomCount(response.data["COUNT(DISTINCT room)"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function countUsers() {
    axios
      .post("/api/countUsers.php")
      .then((response) => {
        setUserCount(response.data["COUNT(*)"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function countFiles() {
    axios
      .post("/api/countFiles.php")
      .then((response) => {
        setFileCount(response.data["COUNT(*)"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getFileData() {
    axios.post("/api/getFileData.php").then((response) => {
      setFileData(response.data);
    });
  }

  function countSubsessionFiles() {
    axios.get("/api/countSubsessionFiles.php").then((response) => {
      setSubsessionFileCount(response.data["COUNT(distinct subsession_id)"]);
    });
    calculateSubsessionPercentage();
  }

  function calculateSubsessionPercentage() {
    let tmp = subsessionFileCount / subsessionCount;
    tmp *= 100;
    setSubsessionPercent(tmp);
  }

  function countSessionFiles() {
    axios
      .get("/api/countSessionFiles.php")
      .then((response) => {
        console.log(response.data.sort());
      })
      .catch((error) => console.log(error));

    console.log(fileData.sort());
    calculateSessionPercentage();
  }

  function calculateSessionPercentage() {
    let tmp = sessionFileCount / sessionCount;
    tmp *= 100;
    setSessionPercent(tmp);
  }

  return (
    <div>
      <Nav state={{ user }} />
      <div className="sessionDataContainer">
        <p>Admin dashboard</p>

        <table className="sessionDataTable">
          <thead>
            <tr>
              <th>Sessions</th>
              <th>Subsessions</th>
              <th>Rooms</th>
              <th>Users</th>
              <th>Files</th>
            </tr>
          </thead>
          <tbody>
            <td>
              <Link to="/sessions">{sessionCount}</Link>
            </td>
            <td>{subsessionCount}</td>
            <td>{roomCount}</td>
            <td>
              <Link to="/users">{userCount}</Link>
            </td>
            <td>{fileCount}</td>
          </tbody>
        </table>
        <div>
          <h3>Metrics</h3>
          <div className="metrics">
            <h4>subsession completion</h4>
            <div className="subsessionCompletion">
              <div
                className="subsessionProgess"
                style={{ width: subsessionPercent * 2 }}
              >
                {subsessionPercent.toFixed(2)}%
              </div>
            </div>
            <div className="sessionProgress">
              <h4>Session completion</h4>
              <div className="subsessionCompletion">
                <div
                  className="subsessionProgess"
                  style={{ width: sessionPercent * 2 }}
                >
                  {sessionPercent.toFixed(2)}%
                </div>
              </div>
              {/*fileData.map((fd, key) => (
                <tr key={fd.file_id}>
                  <td>{fd.subsession_id}</td>
                </tr>
              ))*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
