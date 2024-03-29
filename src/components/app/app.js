import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import { Record } from "../item-details";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from "../pages";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StarshipDetails } from "../sw-components";

export default class App extends React.Component {
  state = {
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false
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
  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };
  render() {
    const { isLoggedIn } = this.state;
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="container">
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <Switch>
              <Route
                path="/"
                exact={true}
                render={() => <h2>Welcome to star DB</h2>}
              />
              <Route path="/people/:id?" component={PeoplePage} exact />
              <Route path="/planets" component={PlanetsPage} exact />
              <Route path="/starships" component={StarshipsPage} exact />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return (
                    <StarshipDetails itemId={id}>
                      <Record field="model" label="Model" />
                      <Record field="manufacturer" label="Manufacturer" />
                      <Record field="costInCredits" label="Cost in credits" />
                    </StarshipDetails>
                  );
                }}
              />
              <Route
                path="/login"
                render={() => (
                  <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                )}
              />
              <Route
                path="/secret"
                render={() => <SecretPage isLoggedIn={isLoggedIn} />}
              />

              <Route render={() => <h2>Page not found</h2>} />
            </Switch>
          </Router>
        </SwapiServiceProvider>
      </div>
    );
  }
}
