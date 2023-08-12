import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Presenting from "../components/Presenting";

function User(props) {
const location = useLocation();
const presenterName = location.state.name;
const user_id = location.state.user_id;
const [user, setUser] = useState([])
useEffect(() => {
  getUser(user_id);  
}, []);
function getUser(id) {
  axios
  .post("http://localhost/api/user.php/", { user_id: user_id })
  .then((response) => {
    setUser(response.data[0]);
  }).catch((err) => console.log(err));
}

return <div>
  <h1>User Info</h1>
  <div className=" bg-blue-800 justify-center rounded-md p-2">  
    <div className="flex justify-center">
      <div>
        <p>Name</p>
        <p>Email</p>
        <p>Pronouns</p>
        <p>Organization</p>
      </div>
      <div>
        <p>{user.fullName}</p>
        <p>{user.email}</p>
        <p>{user.pronouns}</p>
        <p>{user.organization}</p>
      </div>
    </div>
    <div className="flex justify-center">
    <Presenting state={{presenter: presenterName, user_id: user_id}}/>    
    </div>
</div>
</div>;
}

export default User