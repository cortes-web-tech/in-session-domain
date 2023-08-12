import { useState, useEffect } from "react";
import axios from "axios";

import '../App.css'
function DataVisualization(props) {
  const [sessionCount, setSessionCount] = useState(0);
  const [subsessionCount, setSubsessionCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [fileCount, setFileCount] = useState(0);
  const [uniquePresentationFiles, setUniquePresentationFiles] = useState(0);
  const [uniqueSessionFiles, setUniqueSessionFiles] = useState()
  const [presentationPercentage, setPresentationPercentage] = useState(0)
  const [sessionPercentage, setSessionPercentage] = useState(0)
  useEffect(()=>{
    setSessionCount(props.data.sessions)
    setSubsessionCount(props.data.subsessions)
    setRoomCount(props.data.rooms)
    setUserCount(props.data.users)
    setFileCount(props.data.files)
    countUniquePresentationFiles()
    countUniquePresentations()
    setPresentationPercentage(100*uniquePresentationFiles/fileCount)
    setSessionPercentage(100*uniqueSessionFiles/sessionCount)
  })
  function countUniquePresentationFiles() {
    axios
      .post("http://localhost/api/uniquePresentationFileCount.php")
      .then((response) => {                
        setUniquePresentationFiles(response.data["COUNT(DISTINCT subsession_id)"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function countUniquePresentations() {
    axios
      .post("http://localhost/api/uniquePresentationCount.php")
      .then((response) => {                
        setUniqueSessionFiles(response.data["COUNT(DISTINCT presentation_id)"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    
<div>
  <div>
    Sessions with files uploaded:
    <div className="completed" >
    <div className="progress" style={{width: sessionPercentage * 4}}>{uniqueSessionFiles}/{sessionCount} ({sessionPercentage.toFixed(2)} %)</div>
    </div>
  </div>

  <div>
  Presentations with files uploaded: 
  <div className="completed">
    <div className="progress" style={{width: presentationPercentage * 4}}>{uniquePresentationFiles}/{fileCount} ({presentationPercentage.toFixed(2)} %)</div>
  </div>
  </div>
    
</div>
    
  )
}

export default DataVisualization