import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import DataVisualization from "../components/DataVisualization";

function Dashboard() {
  const [sessionCount, setSessionCount] = useState(0);
  const [subsessionCount, setSubsessionCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [fileCount, setFileCount] = useState(0);
  const [sessionFileCount, setSessionFileCount] = useState(2);
  const [subsessionFileCount, setSubsessionFileCount] = useState(0);
  // const [sessionPercent, setSessionPercent] = useState(0);
  // const [subsessionPercent, setSubsessionPercent] = useState(0);
  // const [fileData, setFileData] = useState([]);
  useEffect(() =>{
    runCounters()
  }, [])

  function runCounters(){
    countSessions()
    countUsers()
    countSubSessions()
    countRooms()
    countFiles()
  }

  function countSessions() {
    axios
      .post("http://localhost/api/countSessions.php")
      .then((response) => {        
        setSessionCount(response.data["COUNT(*)"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function countSubSessions() {
    axios
      .post("http://localhost/api/countSubSessions.php")
      .then((response) => {
        setSubsessionCount(response.data["COUNT(*)"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function countUsers() {
    axios
      .post("http://localhost/api/countUsers.php")
      .then((response) => {
        setUserCount(response.data["COUNT(*)"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function countRooms() {
    axios
      .post("http://localhost/api/countRooms.php")
      .then((response) => {
        setRoomCount(response.data["COUNT(DISTINCT room)"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function countFiles() {
    axios
      .post("http://localhost/api/countFiles.php")
      .then((response) => {
        setFileCount(response.data["COUNT(*)"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return <div className="flex justify-center ">
  <div className="min-w-fit">  
    <h1>Dashboard</h1>
    <div >
    <table className="px-20 bg-blue-800 rounded-md">
        <thead>
          <tr >
            <td className="px-2">Sessions</td>
            <td className="px-2">Subsessions</td>
            <td className="px-2">Rooms</td>
            <td className="px-2">Users</td>
            <td className="px-2">Files</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
            <Link to="/Sessions" className="text-blue-400 underline underline-offset-2 hover:text-blue-500">{sessionCount}</Link>
          </td>
          <td>{subsessionCount}</td>
          <td>{roomCount}</td>
          <td>
            <Link to="/Users" className="text-blue-400 underline underline-offset-2 hover:text-blue-500">{userCount}</Link>
          </td>
          <td>{fileCount}</td>
          </tr>
        </tbody>
      </table>
      </div>
    <DataVisualization data={{
      sessions: sessionCount,
      subsessions: subsessionCount,
      rooms: roomCount,
      users: userCount,
      files: fileCount
      }}/>
  </div>
  
</div>;
}

export default Dashboard