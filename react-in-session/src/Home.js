import bg1 from "./images/bg_1.jpg";
import bg2 from "./images/bg_2.jpg";
import bg3 from "./images/bg_3.jpg";
import "./App.css";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";

const Home = (props) => {
  console.log(props);
  const location = useLocation().state;
  console.log(location);
  const user = location.user;

  // console.log(user);
  return (
    <div className="home">
      <Nav state={{ user }} />
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
    </div>
  );
};

export default Home;
