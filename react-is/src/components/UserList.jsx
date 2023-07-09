import axios from "axios";
import {Link} from "react-router-dom"
import { useState, useEffect, React } from 'react';
import '../App.css'
function UserList() {
const [users, setUsers] = useState ([])
  useEffect(()=>{
    getUsers()
  }, [])

  async function getUsers(){
    axios.get("http://localhost:80/api/users.php").then(function (response) {
      if (response.data.error) {
        console.log("Error while getting data.");
      } else {
        setUsers(response.data);
      }
    });
  }

  function role(n){
    switch(n){
        case "0":
            return <div>Guest</div>
        case "1":
            return <div>Presenter</div>
        case "2":
            return <div>Moderator</div>
        case "3":
            return <div>Admin</div>
    }
        

  }

  return (
    <div>
        <table className="usersTable">
        <tbody>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Organization</th>
                <th>Role</th>
            </tr>
            
        {users.map((user, key) => (
            <tr key={user.user_id}>
                <td><Link to="/User" state={{ user_id: user.user_id }}>
                      {user.fullName}
                    </Link></td>
                <td>{user.email}</td>
                <td>{user.organization}</td>
                <td>{role(user.user_tier)}</td>
            </tr>
        ))}
        </tbody>
        </table>
    </div>
  )
}

export default UserList