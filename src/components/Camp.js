import React from "react";
import { connect } from "react-redux";
import { fetchCamp } from "../store/camps/actions";

class Camp extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(fetchCamp(this.props.match.params.id));
    console.log(this.props.match.params.id);
  }

  render() {
    console.log(this.props, "this props");
    return (
      <div>
        {this.props.camp.selectedCamp && (
          <div>
            <h1>{this.props.camp.selectedCamp.Name}</h1>
            <h1>{this.props.camp.selectedCamp.Country}</h1>
            <h1>{this.props.camp.selectedCamp.Refugges}</h1>
            <img src={this.props.camp.selectedCamp.urlLogo}></img>
            <h1>{this.props.camp.selectedCamp.Description}</h1>
          </div>
        )}{" "}
      </div>
    );
  }
  // return <h1>Camp name</h1>;
}
const mapStateToProps = state => ({
  camp: state.camp
  //camps: state.camps.camps
});
export default connect(mapStateToProps)(Camp);
