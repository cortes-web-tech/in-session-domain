import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return <div className="pageLayout">
    <div className="content">  
      <h1 className="">inSession</h1>
      <p className="text-lg">
        inSession is an open source presentation management solution. <br/>
        Created by <a href="https://www.linkedin.com/in/alejandro-cortes-157051156/" target="_blank" className="text-blue-400 underline underline-offset-2 hover:text-blue-500"> Alejandro Cortes</a> as a <a href="https://24mp.world" target="_blank" className="text-blue-400 underline underline-offset-2 hover:text-blue-500 "> portfolio</a> project.
      </p>        
      <h3>The main goal of this project is to demonstrate the following skills:</h3>
      <p>
        React JS Front End <br/>
        PHP / MySQL Back End <br/>
        AWS EC2 Hosting
      </p>      
      <p>To view a demo, please continue to the <Link to="/Dashboard" className="text-blue-400 underline underline-offset-2 hover:text-blue-500">Dashboard</Link></p>
    </div>
    
  </div>;
}

export default Home;
