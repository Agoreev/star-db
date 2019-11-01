import React from "react";
import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PersonDetails extends React.Component {
  state = {
    person: null
  };
  swapiService = new SwapiService();

  componentDidMount() {}
  componentDidUpdate() {
    const personId = this.props.personId ? this.props.personId : 1;
    this.swapiService.getPerson(personId).then(person =>
      this.setState({
        person
      })
    );
  }

  render() {
    const { person } = this.state;
    if (!person) {
      return <Spinner />;
    }

    return (
      <div className="person-details d-flex">
        <img className="person-img" alt="person"></img>
        <div className="person-description">
          <h4>{person.name}</h4>
          <ul className="props-list">
            <li>Gender: {person.gender}</li>
            <li>Birth year: {person.birthYear}</li>
            <li>Eye color: {person.eyeColor}</li>
          </ul>
        </div>
      </div>
    );
  }
}
