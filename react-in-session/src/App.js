import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home.js";
import ListSessions from "./ListSessions.js";
import Session from "./Session.js";
import Footer from "./Footer";
import watermark from "./images/watermark.jpg";

import Session_Info from "./Session_Info.js";
function App() {
  return (
    <div className="AppContainer">
      <div className="leftBar">
        <p>A special thank you to all of our sponsors.</p>
        <img src={watermark} className="watermark" />
      </div>
      <div className="App">
        <NavBar />
        <Footer />
      </div>
      <div className="rightBar">
        <p>We Thank you for your support and participation.</p>
        <img src={watermark} className="watermark" />
      </div>
    </div>
  );
}

export default App;
