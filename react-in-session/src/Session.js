import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Moment from "moment";
const Session = (props) => {
  const location = useLocation();
  const session_id = location.state.session_id;
  const [error, setError] = useState([]);
  const [presenterList, setPresenterList] = useState([]);
  const [subsessions, setSubsessions] = useState([]);
  const [toggleSubsession, setToggle] = useState(false);
  const [add_subsessionTitle, setAdd_subsessionTitle] = useState([]);
  const [add_presenter, setAdd_presenter] = useState([]);

  const [session, setSession] = useState([]);
  useEffect(() => {
    getSession(session_id);
    getPresenterList();
  }, []);

  function getSession(id) {
    axios
      .post("/api/getSession.php", { session_id: id })
      .then((response) => setSubsessions(response.data))
      .catch((err) => console.log(err));
  }

  function toggleAdd() {
    setToggle(!toggleSubsession);
  }

  function toggleRemove() {
    setToggle(!toggleSubsession);
  }

  const handleInputChange = (e, type) => {
    switch (type) {
      case "title":
        setError("");
        setAdd_subsessionTitle(e.target.value);
        if (e.target.value === "") {
          setError("Subsession title left blank.");
        }
        break;
      case "presenter":
        setError("");
        setAdd_presenter(e.target.value);
        if (e.target.value === "") {
          setError("Presenter left blank.");
        }
        break;
    }
  };

  function addNewSubession() {
    if (add_subsessionTitle == "" || add_presenter == "") {
      setError("Blank field. Please check the session you're trying to add.");
    } else {
      console.log("Adding subsession");
      axios
        .post("/api/createSubsession.php", {
          session_id: session_id,
          title: add_subsessionTitle,
          presenter: add_presenter,
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  }

  function getPresenterList(e) {
    axios
      .get("/api/presenterList.php")
      .then((res) => {
        setPresenterList(res.data);
      })
      .catch((err) => console.log(err));
  }
  function dropDown(presenter) {
    setAdd_presenter(presenter);
  }
  return (
    <div>
      <Nav />
      <div className="sessionDataContainer">
        <h3>Session Title</h3>
        <table className="sessionDataTable">
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
          {toggleSubsession ? (
            <div>
              <div>
                <label>Subsession Title</label>
                <input
                  type="text"
                  value={add_subsessionTitle}
                  onChange={(e) => handleInputChange(e, "title")}
                  placeholder="SubsessionTitle"
                />
                <label>Presenter</label>
                <select onChange={(e) => dropDown(e.target.value)}>
                  {presenterList.map((presenter) => {
                    return <option>{presenter}</option>;
                  })}
                </select>
                <input
                  type="submit"
                  defaultValue="Log in"
                  id="login_button"
                  onClick={addNewSubession}
                />
              </div>

              {error !== "" ? <span className="error">{error}</span> : ""}
              <button onClick={toggleRemove}>cancel</button>
            </div>
          ) : (
            <button onClick={toggleAdd}>add subssession</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Session;
