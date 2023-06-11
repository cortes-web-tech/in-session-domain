import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import watermark from "./images/watermark.jpg";
import watermark2 from "./images/watermark_2.jpg";
import Home from "./Home.js";
import Homepage from "./Homepage";
import Logout from "./Logout";
import Session from "./Session";
import Sessions from "./Sessions";
import Users from "./Users";
import User from "./User";

const App = () => {
  return (
    <div className="AppContainer">
      <div className="leftBar">
        <p>A special thank you to all of our sponsors.</p>
        <img src={watermark} className="watermark" />
      </div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Session" element={<Session />} />
            <Route path="Sessions" element={<Sessions />} />
            <Route path="Users" element={<Users />} />
            <Route path="User" element={<User />} />
            <Route path="Homepage" element={<Homepage />} />
            <Route path="Logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="rightBar">
        <p>We Thank you for your support and participation.</p>
        <img src={watermark2} className="watermark" />
      </div>
    </div>
  );
};

export default App;
