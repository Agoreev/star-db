import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
          <Router>
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <Route
              path="/"
              exact={true}
              render={() => <h2>Welcome to star DB</h2>}
            />
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starships" component={StarshipsPage} />
          </Router>
        </SwapiServiceProvider>
      </div>
    );
  }
}
