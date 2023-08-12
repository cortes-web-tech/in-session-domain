import axios from "axios";
import {Link} from "react-router-dom"
import { useState, useEffect, React } from 'react';
function UserList() {
const [users, setUsers] = useState ([])
  useEffect(()=>{
    getUsers()
  }, [])
  async function getUsers(){
    axios.get("http://localhost/api/users.php").then(function (response) {
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
    <div className="bg-blue-800 p-2 rounded-md">
        <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Organization</th>
                <th>Role</th>
            </tr>
            
        {users.map((user, key) => (
            <tr key={user.user_id} className="border-t-4  border-blue-500">
                <td className="border-r-4 border-blue-500 pr-2"><Link to="/User" state={{ name: user.fullName, user_id: user.user_id }} className="text-blue-400 underline underline-offset-2 hover:text-blue-500">
                      {user.fullName}
                    </Link></td>
                <td className="pl-2">{user.email}</td>
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