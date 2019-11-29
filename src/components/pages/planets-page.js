import React from "react";
import { Record } from "../item-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import { PlanetList, PlanetDetails } from "../sw-components";

export default class PlanetsPage extends React.Component {
  state = {
    selectedPlanet: null
  };

  onPlanetSelected = id => {
    this.setState({
      selectedPlanet: id
    });
  };

  render() {
    const itemList = (
      <PlanetList onItemSelected={this.onPlanetSelected}></PlanetList>
    );
    const itemDetails = (
      <ErrorBoundry>
        <PlanetDetails itemId={this.state.selectedPlanet}>
          <Record field="population" label="Population" />
          <Record field="rotationPeriod" label="Rotation period" />
          <Record field="diameter" label="Diameter" />
        </PlanetDetails>
      </ErrorBoundry>
    );

    return (
      <React.Fragment>
        <Row left={itemList} right={itemDetails} />
      </React.Fragment>
    );
  }
}
