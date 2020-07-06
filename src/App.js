import React from "react";
import "./App.css";
import ghostImage from "./assets/images/ghost.jpg";
import cyberImage from "./assets/images/cyberpunk.webp";
import mafiaImage from "./assets/images/mafia.jpg";

const imageStyle = {
  verticalalign: "middle",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
};

const divStyle = {
  backgroundColor: "white",
  color: "black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

function App() {
  let games = [
    {
      name: "Ghost of Tsushima",
      releaseDate: new Date(2020, 7, 17),
      imageSrc: ghostImage,
    },
    {
      name: "Cyberpunk 2077",
      releaseDate: new Date(2020, 11, 19),
      imageSrc: cyberImage,
    },
    {
      name: "Mafia: Definitive Edition",
      releaseDate: new Date(2020, 8, 28),
      imageSrc: mafiaImage,
    },
  ];
  games.sort((a, b) => a.releaseDate - b.releaseDate);

  return (
    <section class="mainApp">
      {games.map((game, index) => (
        <div style={divStyle} key={index}>
          <img style={imageStyle} src={game.imageSrc} />
          <p>{game.name}</p>
          <p>{game.releaseDate.toUTCString()}</p>
        </div>
      ))}
    </section>
  );
}

export default App;
