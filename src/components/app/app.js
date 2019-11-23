import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";

import "./app.css";
import PeoplePage from "../people-page";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";

export default class App extends React.Component {
  state = {
    hasError: false,
    swapiService: new SwapiService()
  };
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log("switched to", Service.name);
      return {
        swapiService: new Service()
      };
    });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="container">
        <SwapiServiceProvider value={this.state.swapiService}>
          <Header onServiceChange={this.onServiceChange} />
          <RandomPlanet />
          <PeoplePage />
        </SwapiServiceProvider>
      </div>
    );
  }
}
