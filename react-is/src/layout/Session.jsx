import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Moment from "moment";
import axios from "axios";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
function Session() {
const location = useLocation();
const session_id = location.state.session_id;
const [subsessions, setSubsessions] = useState([]);
useEffect(() => {
    getSession(session_id);
  }, []);

  function getSession(id) {
    axios
      .post("http://localhost:80/api/getSession.php", { session_id: id })
      .then((response) => setSubsessions(response.data))
      .catch((err) => console.log(err));
  }
return <div className="pageLayout">
<Nav/>
<div className="content">  
<table className="sessionDataTable">
          <tbody>
            <tr>
            <td>Subsession Title</td>
            <td>Presenter</td>
            <td>Start Time</td>
            <td>End Time</td>
            <td>Moderator</td>
            </tr>
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
</div>
<Footer/>  
</div>;
}

export default Session