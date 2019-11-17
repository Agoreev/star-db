import React from "react";
import "./item-list.css";

const ItemList = ({ data, children: renderLabel, onItemSelected }) => {
  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });
  return <ul className="list-group item-list">{items}</ul>;
};

export default ItemList;
