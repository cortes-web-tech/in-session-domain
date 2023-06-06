import bg1 from "./images/bg_1.jpg";
import bg2 from "./images/bg_2.jpg";
import bg3 from "./images/bg_3.jpg";
import "./App.css";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";

const Home = (props) => {
  // console.log(props);
  // const location = useLocation().state;
  // console.log(location);
  // const user = location.user;
  const [loggedIn, setLoggedIn] = useState(false);
  // setLoggedIn(false);
  // console.log(user);
  return (
    <div>
      {loggedIn ? (
        <div className="slide-images">
          <div className="img-container">
            <img src={bg1} />
          </div>
          <div className="img-container">
            <img src={bg2} />
          </div>
          <div className="img-container">
            <img src={bg3} />
          </div>
        </div>
      ) : (
        <div className="home">
          place holder
          {/* <Login /> */}
        </div>
      )}
    </div>
  );
};

export default Home;
