import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService.getPlanet(id).then(planet => {
      this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      });
    });
  }
  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state;
    return (
      <div className="random-planet jumbotron rounder">
        <img
          className="planet-image"
          alt="planet"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />

        <div className="planet-description">
          <h4>{name}</h4>
          <ul className="props-list">
            <li>
              <span className="term">Population: </span>
              <span>{population}</span>
            </li>
            <li>
              <span className="term">Rotation period: </span>
              <span>{rotationPeriod}</span>
            </li>
            <li>
              <span className="term">Diameter: </span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
