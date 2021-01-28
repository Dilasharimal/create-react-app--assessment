import React from "react";
import Game from "./Components/Game/Game";
import image1 from "./Components/Assets/images/raccoon.png";
import image2 from "./Components/Assets/images/bunny.png";
import image3 from "./Components/Assets/images/hound.png";
import image4 from "./Components/Assets/images/squirrel.png";

//import logo from "./logo.svg";

import "./App.css";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: image1,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: image4,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: image2,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: image3,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
