import bg1 from "./images/bg_1.jpg";
import bg2 from "./images/bg_2.jpg";
import bg3 from "./images/bg_3.jpg";
import "./App.css";

export default function Home() {
  return (
    <div class="home">
      <div class="slide-images">
        <div class="img-container">
          <img src={bg1} />
        </div>
        <div class="img-container">
          <img src={bg2} />
        </div>
        <div class="img-container">
          <img src={bg3} />
        </div>
      </div>
    </div>
  );
}
