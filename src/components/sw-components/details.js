import ItemDetails from "../item-details";
import { withDetails, withSwapiService } from "../hoc-helpers";

const mapPersonMethodsToProps = swapiService => {
  return {
    getItem: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};
const mapPlanetMethodsToProps = swapiService => {
  return {
    getItem: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};
const mapStarshipMethodsToProps = swapiService => {
  return {
    getItem: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
};

const PersonDetails = withSwapiService(
  withDetails(ItemDetails),
  mapPersonMethodsToProps
);
const PlanetDetails = withSwapiService(
  withDetails(ItemDetails),
  mapPlanetMethodsToProps
);
const StarshipDetails = withSwapiService(
  withDetails(ItemDetails),
  mapStarshipMethodsToProps
);

export { PersonDetails, PlanetDetails, StarshipDetails };
