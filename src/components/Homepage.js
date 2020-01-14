import React from "react";
import { connect } from "react-redux";
import { fetchCamps } from "../store/camps/actions";
import Map from "./Map";
import CampsList from "./CampsList";
import "./style.css";

class Homepage extends React.Component {
  state = {
    filteredCamps: this.props.camps
  };
  componentDidMount() {
    this.props.fetchCamps();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.camps !== this.props.camps) {
      this.setState({ filteredCamps: nextProps.camps });
    }
  }
  filter(country) {
    const filtered = this.props.camps.filter(camp => camp.Country === country);
    this.setState({ filteredCamps: filtered });
  }

  resetFilter() {
    this.setState({ filteredCamps: this.props.camps });
  }

  render() {
    const countries = this.props.camps.map(a => a.Country);
    const uniqueCountries = countries.filter((x, i, a) => a.indexOf(x) == i);

    return (
      <div>
        <Map allCamps={this.props.camps} />
        <br />
        <br />
        {uniqueCountries.map(country => (
          <button
            className="button"
            key={country}
            onClick={() => {
              this.filter(country);
            }}
          >
            {country}
          </button>
        ))}
        <button className="button-all" onClick={() => this.resetFilter()}>
          All Camps
        </button>

        <br />
        {this.state.filteredCamps.map((camp, i) => (
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
