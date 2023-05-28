import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import ListSessions from './ListSessions.js';
import Home from './Home.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <li>Profile</li>
            <li>Current User</li>
            <Link to ="ListSessions">Sessions</Link>
            <li>Logout</li>
          </ul> 
          </nav>
        <h1>Welcome to inSession</h1>            
      </div>
      <div>

      <Routes>
          <Route path ="/" element={<Home />} />
          <Route path="ListSessions" element={<ListSessions />} />
      </Routes>
      </div>

          
          
        

        </BrowserRouter>

    </div>
  );
}

export default App;
