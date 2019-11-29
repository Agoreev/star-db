import React from "react";
import { Record } from "../item-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import { PersonList, PersonDetails } from "../sw-components";
import { withRouter } from "react-router-dom";

const PeoplePage = ({ match, history }) => {
  const itemList = (
    <PersonList onItemSelected={id => history.push(id)}></PersonList>
  );
  const itemDetails = (
    <ErrorBoundry>
      <PersonDetails itemId={match.params.id}>
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
};
export default withRouter(PeoplePage);
