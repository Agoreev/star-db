import React from "react";
import { Record } from "../item-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import { PersonList, PersonDetails } from "../sw-components";

export default class PeoplePage extends React.Component {
  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const itemList = (
      <PersonList onItemSelected={this.onPersonSelected}></PersonList>
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
    return (
      <React.Fragment>
        <Row left={itemList} right={itemDetails} />
      </React.Fragment>
    );
  }
}
