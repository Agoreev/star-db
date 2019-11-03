import React from "react";
import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PersonDetails extends React.Component {
  state = {
    person: null,
    loading: true
  };
  swapiService = new SwapiService();

  updatePerson() {
    this.setState({
      loading: true
    });
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiService.getPerson(personId).then(person =>
      this.setState({
        person,
        loading: false
      })
    );
  }

  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  render() {
    const { person, loading } = this.state;

    if (!person) {
      return (
        <div className="person-details d-flex">
          <span>Select a person</span>
        </div>
      );
    }

    const content = loading ? (
      <Spinner />
    ) : (
      <PersonView person={person}></PersonView>
    );

    return <div className="person-details d-flex">{content}</div>;
  }
}

const PersonView = ({ person }) => {
  return (
    <React.Fragment>
      <img
        className="person-img"
        alt="person"
        src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
      ></img>
      <div className="person-description">
        <h4>{person.name}</h4>
        <ul className="props-list">
          <li>Gender: {person.gender}</li>
          <li>Birth year: {person.birthYear}</li>
          <li>Eye color: {person.eyeColor}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};
