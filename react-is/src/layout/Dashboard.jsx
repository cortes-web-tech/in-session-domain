import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

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
  const [fileData, setFileData] = useState([]);
  return <div className="pageLayout">
  <Nav/>
  <div className="content">  
    <h1>Dashboard</h1>
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
    
  </div>
  <Footer/>  
</div>;
}

export default Dashboard