import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Nav from "./Nav";
import "./App.css";
const Homepage = (props) => {
  const location = useLocation().state;
  const user = location;
  const [sessionCount, setSessionCount] = useState([0]);
  const [subsessionCount, setSubsessionCount] = useState([0]);
  const [roomCount, setRoomCount] = useState([0]);
  const [fileCount, setFileCount] = useState([0]);
  useEffect(() => {
    countSessions();
    countSubSessions();
    countRooms();
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
              <th>Files</th>
            </tr>
          </thead>
          <tbody>
            <td>{sessionCount}</td>
            <td>{subsessionCount}</td>
            <td>{roomCount}</td>
            <td>{fileCount}</td>
          </tbody>
        </table>
        <div className="metrics">
          <h3>Metrics</h3>
          <table>
            <tr>
              <td>woo</td>
              <td>woo</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
