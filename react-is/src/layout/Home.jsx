import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Home() {
  return <div className="pageLayout">
    <Nav/>
    <div className="content">  
      <h1>inSession</h1>
      <p>
        inSession is an open source presentation management solution. <br/>
        Created by <a href="https://www.linkedin.com/in/alejandro-cortes-157051156/" target="_blank"> Alejandro Cortes</a> as a <a href="https://24mp.world" target="_blank"> portfolio</a> project.
      </p>        
      <h3>The main goal of this project is to demonstrate the following skills:</h3>
      <p>
        React JS Front End <br/>
        PHP / MySQL Back End <br/>
        AWS EC2 Hosting
      </p>
      
      <p>To view a demo, please continue to the <Link to="/Dashboard">Dashboard</Link></p>
    </div>
    <Footer/>  
  </div>;
}

export default Home;
