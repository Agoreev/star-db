import React from "react";
import "./people-page.css";
import { Record } from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {
  PersonList,
  PersonDetails,
  StarshipList,
  StarshipDetails
} from "../sw-components";

export default class PeoplePage extends React.Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: null,
    selectedStarship: null
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };
  onStarshipSelected = id => {
    this.setState({
      selectedStarship: id
    });
  };

  render() {
    const itemList = (
      <PersonList onItemSelected={this.onPersonSelected}>
        {i => `${i.name} (${i.birthYear})`}
      </PersonList>
    );
    const itemDetails = (
      <ErrorBoundry>
        <PersonDetails itemId={this.state.selectedPerson}>
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye color" />
          <Record field="birthYear" label="Birth year" />
        </PersonDetails>
      </ErrorBoundry>
    );
    const StarshipsList = (
      <StarshipList onItemSelected={this.onStarshipSelected}>
        {i => `${i.name} (${i.model})`}
      </StarshipList>
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
        <Row left={itemList} right={itemDetails} />
        <Row left={StarshipsList} right={StarshipsDetials} />
      </React.Fragment>
    );
  }
}
