import React from "react";
import { connect } from "react-redux";
import { fetchCamp } from "../store/camps/actions";

class Camp extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCamp);
  }
  render() {
    return <div>{this.props.camp && <h1>{this.props.camp.name}</h1>} </div>;
  }
  // return <h1>Camp name</h1>;
}

export default Camp;
