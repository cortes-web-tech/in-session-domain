import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
const SessionLink = (props) => {
  const title = props.title;
  const sessionNum = props.session_id;
  const session = props;
  // console.log(sessionNum);
  // console.log
  const [session_id, setSession_id] = useState([]);
  useEffect(() => {
    getSession();
  });
  function getSession() {
    setSession_id(sessionNum);
  }

  return (
    <div>
      {/* {console.log(sessionNum)} */}
      <Link
        to={{
          pathname: "/Session/:id",
          state: {
            session_id: sessionNum,
          },
        }}
      >
        {title}
      </Link>
    </div>
  );
};
export default SessionLink;
