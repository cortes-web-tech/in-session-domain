import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ListSessions from "./ListSessions.js";
import Home from "./Home.js";
import Session_Info from "./Session_Info";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Profile</li>
              <li>Current User</li>
              <li>
                <Link to="ListSessions">Sessions</Link>
              </li>
              <li>Logout</li>
            </ul>
          </nav>
          <h1>Welcome to inSession</h1>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="ListSessions" element={<ListSessions />} />
            <Route path="Index" element={<Home />} />
            <Route path="Session_Info" element={<Session_Info />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
