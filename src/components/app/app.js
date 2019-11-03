import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";

import "./app.css";
import PeoplePage from "../people-page";
import ErrorIndicator from "../error-indicator";

export default class App extends React.Component {
  state = {
    hasError: false
  };
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}
