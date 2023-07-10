import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SessionList from '../components/SessionList';
function Sessions() {
  return <div className="pageLayout">
  <Nav/>
  <div className="content">  
    <h1>Sessions</h1>
    <SessionList/>
  </div>
  <Footer/>  
</div>;
}

export default Sessions