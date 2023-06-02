import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ListSessions from "./ListSessions.js";
import Home from "./Home.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div class="nav">
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
        <div class="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="ListSessions" element={<ListSessions />} />
            <Route path="Index" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
