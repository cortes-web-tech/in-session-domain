import Nav from '../components/Nav';
import Footer from '../components/Footer';
import UserList from '../components/UserList';
function Users() {
  
    return <div className="pageLayout">
    <Nav/>
    <div className="content">  
      <h1>Users</h1>
      <UserList/>
    </div>
    <Footer/>  
  </div>;
}

export default Users