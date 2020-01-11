import React from "react";
import { connect } from "react-redux";
import { fetchCamps } from "../store/camps/actions";
import Map from "./Map";
import CampsList from "./CampsList";

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
        <br />
        {this.props.camps.map((camp, i) => (
          <CampsList key={i} data={camp} />
        ))}
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
