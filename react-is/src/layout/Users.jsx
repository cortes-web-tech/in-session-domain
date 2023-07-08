import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageWIP from '../components/PageWIP';
function Users() {
    return <div className="pageLayout">
    <Nav/>
    <div className="content">  
      <h1>Users</h1>
      <PageWIP/>
    </div>
    <Footer/>  
  </div>;
}

export default Users