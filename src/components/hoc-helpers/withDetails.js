import React from "react";
import Spinner from "../spinner";

const withDetails = View => {
  return class extends React.Component {
    state = {
      item: null,
      loading: false,
      image: null
    };

    updateItem() {
      const { itemId } = this.props;
      if (!itemId) {
        return;
      }
      this.setState({
        loading: true
      });

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

      const noItemSelected = (
        <div className="item-details d-flex">
          <span>Select an item</span>
        </div>
      );

      const content = loading ? (
        <Spinner />
      ) : item ? (
        <View {...this.props} item={item} image={image} />
      ) : (
        noItemSelected
      );
      return content;
    }
  };
};

export default withDetails;
