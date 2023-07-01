import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import Homepage from "./Homepage";
import Logout from "./Logout";
import Session from "./Session";
import Sessions from "./Sessions";
import Users from "./Users";
import User from "./User";
import Register from "./Register";
import ViewUser from "./ViewUser";
import Filelist from "./Filelist";
import CreateUser from "./CreateUser";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Session" element={<Session />} />
          <Route path="Sessions" element={<Sessions />} />
          <Route path="Users" element={<Users />} />
          <Route path="User" element={<User />} />
          <Route path="Homepage" element={<Homepage />} />
          <Route path="Logout" element={<Home />} />
          <Route path="Register" element={<Register />} />
          <Route path="ViewUser" element={<ViewUser />} />
          <Route path="Filelist" element={<Filelist />} />
          <Route path="CreateUser" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
