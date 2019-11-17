import React from "react";
import "./item-details.css";

const Record = ({ item, field, label }) => {
  return (
    <li>
      {label}: {item[field]}
    </li>
  );
};

export { Record };

const ItemDetails = ({ item, image, children }) => {
  return (
    <div className="item-details d-flex">
      <img className="item-img" alt="item" src={image}></img>
      <div className="item-description">
        <h4>{item.name}</h4>
        <ul className="props-list">
          {React.Children.map(children, child => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    </div>
  );
};

export default ItemDetails;
