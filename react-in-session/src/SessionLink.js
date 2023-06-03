import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const SessionLink = (props) => {
  const session = props.params;
  //   console.log(session.session_id);
  const sesh_id = session.session_id;
  //   console.log(sesh_id);
  return (
    <div>
      {/* <div>{sesh_id}</div> */}

      <Link to={"/Session"} data={{ session_id: sesh_id }}>
        {session.title}
      </Link>
    </div>
  );
};
export default SessionLink;
