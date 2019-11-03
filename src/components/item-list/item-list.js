import React from "react";
import "./item-list.css";
import Spinner from "../spinner";

export default class ItemList extends React.Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemList => {
      this.setState({
        itemList
      });
    });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return (
        <div className="item-list">
          <Spinner />
        </div>
      );
    }

    const items = this.renderItems(itemList);
    return <ul className="list-group item-list">{items}</ul>;
  }
}
