import React from "react";
import "./random-planet.css";

const RandomPlanet = () => {
  return (
    <div className="random-planet card">
      <img className="planet-image" />

      <div className="planet-description">
        <h4>Planet name</h4>
        <ul className="props-list">
          <li>Population: 22222222</li>
          <li>Rotation period: 12</li>
          <li>Diameter: 123</li>
        </ul>
      </div>
    </div>
  );
};

export default RandomPlanet;
