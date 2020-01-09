import React from "react";
import { connect } from "react-redux";
import { fetchCamps } from "../store/camps/actions";
import Map from "./Map";

class Homepage extends React.Component {
  componentDidMount() {
    console.log("being called fetchCamps");
    this.props.fetchCamps();
  }

  render() {
    const allCamps = this.props.camps;
    return (
      <div>
        <Map allCamps={allCamps} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    camps: reduxState.camps.allCamps
  };
};
export default connect(mapStateToProps, { fetchCamps })(Homepage);
