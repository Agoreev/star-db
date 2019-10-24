import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <RandomPlanet />
    </div>
  );
};

export default App;
