import React from "react";
import { Record } from "../item-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import { StarshipList, StarshipDetails } from "../sw-components";

export default class PeoplePage extends React.Component {
  state = {
    selectedStarship: null
  };

  onStarshipSelected = id => {
    this.setState({
      selectedStarship: id
    });
  };

  render() {
    const StarshipsList = (
      <StarshipList onItemSelected={this.onStarshipSelected}></StarshipList>
    );
    const StarshipsDetials = (
      <ErrorBoundry>
        <StarshipDetails itemId={this.state.selectedStarship}>
          <Record field="model" label="Model" />
          <Record field="manufacturer" label="Manufacturer" />
          <Record field="costInCredits" label="Cost in credits" />
        </StarshipDetails>
      </ErrorBoundry>
    );
    return (
      <React.Fragment>
        <Row left={StarshipsList} right={StarshipsDetials} />
      </React.Fragment>
    );
  }
}
