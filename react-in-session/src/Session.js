import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Moment from "moment";
const Session = (props) => {
  const [session, setSession] = useState([]);
  const [subsessions, setSubsessions] = useState([]);
  const [addSubsession, setAddSubsession] = useState(false);
  const [add_subsessionTitle, setadd_subsessionTitle] = [];
  const location = useLocation();
  const session_id = location.state.session_id;
  useEffect(() => {
    getSession(session_id);
  }, []);

  function getSession(id) {
    axios
      .post("/api/getSession.php", { session_id: id })
      .then((response) => setSubsessions(response.data))
      .catch((err) => console.log(err));
  }

  function toggleAddSubsession() {
    setAddSubsession(!addSubsession);
  }

  return (
    <div>
      <Nav />
      <div className="sessionDataContainer">
        <h3>Session Title</h3>
        <table className="sessionDataTable">
          <thead>
            <tr>
              <th>Subsession Title</th>
              <th>Presenter</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Moderator</th>
            </tr>
          </thead>
          <tbody>
            {subsessions.map((subsession, key) => (
              <tr key={subsession.subsession_id}>
                <td>{subsession.subsession_title}</td>
                <td>
                  <Link to="/ViewUser" state={{ user_id: subsession._user_id }}>
                    {subsession.presenter}
                  </Link>
                </td>
                <td>{Moment(subsession.startTime).format("MM/DD/YY h:mmA")}</td>
                <td>{Moment(subsession.endTime).format("MM/DD/YY h:mmA")}</td>
                <td>{subsession.modName}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          {addSubsession ? (
            <div>
              <div>
                <label>Subsession Title</label>
                <input
                  type="text"
                  value={add_subsessionTitle}
                  placeholder="SubsessionTitle"
                />
              </div>
              <button onClick={toggleAddSubsession}>cancel</button>
            </div>
          ) : (
            <button onClick={toggleAddSubsession}>add subssession</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Session;
