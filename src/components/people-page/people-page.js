import React from "react";
import "./people-page.css";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import ErrorThrower from "../error-thrower/error-thrower";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends React.Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: null,
    hasError: false
  };

  componentDidCatch() {
    console.log("catch");
    this.setState({
      hasError: true
    });
  }
  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="row">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
          <ErrorThrower />
        </div>
      </div>
    );
  }
}
