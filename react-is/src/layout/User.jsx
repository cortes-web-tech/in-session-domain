import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Presenting from "../components/Presenting";

function User(props) {
const location = useLocation();
const user_id = location.state.user_id;
const [user, setUser] = useState([])
useEffect(() => {
  getUser(user_id);  
}, []);
function getUser(id) {
  axios
  .post("http://localhost/api/user.php/", { user_id: id })
  .then((response) => {
    setUser(response.data[0]);
  }).catch((err) => console.log(err));
}

return <div className="pageLayout">
<div className="content">  
  <h2>User Info</h2>
    <div className="userInfo">
      <div className="userInfo_col">
        <p>Name</p>
        <p>Email</p>
        <p>Pronouns</p>
        <p>Organization</p>
      </div>
      <div className="userInfo_col">
        <p>{user.fullName}</p>
        <p>{user.email}</p>
        <p>{user.pronouns}</p>
        <p>{user.organization}</p>
      </div>
    </div>         
    <Presenting state={{user_id}}/>
</div>
</div>;
}

export default User