import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home.js";
import ListSessions from "./ListSessions.js";
import Session from "./Session.js";
import User from "./User";
import Users from "./Users";
import Login from "./Login";
import Nav from "./Nav";
import Footer from "./Footer";
import watermark from "./images/watermark.jpg";
import watermark2 from "./images/watermark_2.jpg";

import Session_Info from "./Session_Info.js";
const App = () => {
  // const location = useLocation();
  return (
    <div className="AppContainer">
      <div className="leftBar">
        <p>A special thank you to all of our sponsors.</p>
        <img src={watermark} className="watermark" />
      </div>
      <div className="App">
        <NavBar />
        {/* <Nav /> */}

        <Footer />
      </div>
      <div className="rightBar">
        <p>We Thank you for your support and participation.</p>
        <img src={watermark2} className="watermark" />
      </div>
    </div>
  );
};

export default App;
