import React from "react";
import "./person-details.css";

const PersonDetails = () => {
  return (
    <div className="person-details d-flex">
      <img className="person-img" alt="person"></img>
      <div className="person-description">
        <h4>R2D2</h4>
        <ul className="props-list">
          <li>Gender: male</li>
          <li>Birth Year: 12</li>
          <li>Diameter: 123</li>
        </ul>
      </div>
    </div>
  );
};

export default PersonDetails;
