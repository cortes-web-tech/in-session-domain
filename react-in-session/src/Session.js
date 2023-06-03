import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router,
  useLocation,
} from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Session = (props) => {
  const [session, setSession] = useState([]);
  const location = useLocation();
  const session_id = location.state.session_id;
  useEffect(() => {
    setSession();
  });
  function getSession() {
    axios
      .get("http://192.168.1.15/api/getSession.php")
      .then(function (response) {
        if (response.data.error) {
          console.log("Error while getting data.");
        } else {
          // console.log(response.data);
          setSession(response.data);
        }
      });
  }

  return (
    <div>
      <div>Session Title: </div>
      <div>Subsessions</div>
      <div>Fetching data from session number: {session_id}</div>
    </div>
  );
};

export default Session;
