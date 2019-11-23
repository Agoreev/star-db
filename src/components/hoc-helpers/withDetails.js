import React from "react";
import Spinner from "../spinner";

const withDetails = View => {
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
      this.props.getItem(itemId).then(item =>
        this.setState({
          item,
          loading: false,
          image: this.props.getImageUrl(item)
        })
      );
    }

    componentDidMount() {
      this.updateItem();
    }
    componentDidUpdate(prevProps) {
      if (
        this.props.itemId !== prevProps.itemId ||
        this.props.getData !== prevProps.getData ||
        this.props.getImageUrl !== prevProps.getImageUrl
      ) {
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
