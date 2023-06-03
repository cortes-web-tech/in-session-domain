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
  // let session = useParams();
  // console.log(session);
  console.log(props);
  // console.log(location);
  //   console.log(props);
  // const [session, setSession] = useState([]);
  // const { handle } = useParams();
  //   console.log(handle);

  function getSession() {
    axios
      .get("http://192.168.1.15/api/getSession.php")
      .then(function (response) {
        if (response.data.error) {
          console.log("Error while getting data.");
        } else {
          console.log(response.data);
          //   setSession(response.data);
        }
      });
  }

  //     const session = props.data;
  //   console.log(typeof session);
  //   console.log(session);
  return (
    <div>
      <div>Session info below</div>
      <div>Session info poggers</div>
    </div>
  );
};

export default Session;
