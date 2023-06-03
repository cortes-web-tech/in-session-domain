import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
const SessionLink = (props) => {
  const session = props.params;
  const [session_id, setSession_id] = useState([]);
  useEffect(() => {
    getSession();
  });
  function getSession() {
    setSession_id(session.session_id);
  }
  return (
    <div>
      {/* <div>{sesh_id}</div> */}

      <Link
        to={{
          pathname: "/Session",
          state: session_id,
        }}
      >
        {session.title}
      </Link>
    </div>
  );
};
export default SessionLink;
