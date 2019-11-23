import React from "react";
import Spinner from "../spinner";

const withData = View => {
  return class extends React.Component {
    state = {
      data: null
    };

    updateData = () => {
      this.props.getData().then(data => {
        this.setState({
          data
        });
      });
    };

    componentDidMount() {
      this.updateData();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.updateData();
      }
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
