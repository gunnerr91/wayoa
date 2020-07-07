import React from "react";
import "./App.css";
import ghostImage from "./assets/images/ghost.jpg";
import cyberImage from "./assets/images/cyberpunk.webp";
import mafiaImage from "./assets/images/mafia.jpg";

function App() {
  let games = [
    {
      name: "Ghost of Tsushima",
      releaseDate: new Date(2020, 7, 17),
      imageSrc: ghostImage
    },
    {
      name: "Cyberpunk 2077",
      releaseDate: new Date(2020, 11, 19),
      imageSrc: cyberImage
    },
    {
      name: "Mafia: Definitive Edition",
      releaseDate: new Date(2020, 8, 28),
      imageSrc: mafiaImage
    }
  ];
  games.sort((a, b) => a.releaseDate - b.releaseDate);

  return (
    <div className="mainApp">
      {games.map((game, index) => (
        <div className="commonDivStyle" key={index}>
          <img className="imageStyle" src={game.imageSrc} />
          <div className="textStyle">
            <p>{game.name}</p>
            <p>{game.releaseDate.toUTCString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
