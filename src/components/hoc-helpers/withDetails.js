import React from "react";
import Spinner from "../spinner";

const withDetails = (View, getItem, getImageUrl) => {
  return class extends React.Component {
    state = {
      item: null,
      loading: true,
      image: null
    };

    updateItem() {
      this.setState({
        loading: true
      });
      const { itemId } = this.props;
      if (!itemId) {
        return;
      }
      getItem(itemId).then(item =>
        this.setState({
          item,
          loading: false,
          image: getImageUrl(item)
        })
      );
    }

    componentDidMount() {
      this.updateItem();
    }
    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.updateItem();
      }
    }

    render() {
      const { item, image, loading } = this.state;
      if (!item) {
        return (
          <div className="item-details d-flex">
            <span>Select an item</span>
          </div>
        );
      }

      const content = loading ? (
        <Spinner />
      ) : (
        <View {...this.props} item={item} image={image} />
      );
      return content;
    }
  };
};

export default withDetails;
