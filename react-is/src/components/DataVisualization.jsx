import { useState, useEffect } from "react";
import axios from "axios";

function DataVisualization(props) {
  const [sessionCount, setSessionCount] = useState(0);
  const [subsessionCount, setSubsessionCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [fileCount, setFileCount] = useState(0);
  useEffect(()=>{
    setSessionCount(props.data.sessions)
    setSubsessionCount(props.data.subsessions)
    setRoomCount(props.data.rooms)
    setUserCount(props.data.users)
    setFileCount(props.data.files)
  })

  return (
    <div>
      Rechart will live here with the following data.
      <br/> 
      {sessionCount}, {subsessionCount}, {roomCount}, {userCount}, {fileCount}
    </div>
  )
}

export default DataVisualization