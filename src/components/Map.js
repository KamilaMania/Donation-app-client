import React, { Component } from "react";
import GoogleMap from "google-map-react";
import CampMarker from "./CampMarker";
import { withRouter } from "react-router-dom";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 12.156457,
      lng: 30.739305
    },
    zoom: 1
  };
  state = {
    hovered: null
  };

  _onChildClick = key => {
    this.props.history.push("/camp/" + key);
  };

  _onChildMouseEnter = key => {
    this.setState({ hovered: parseInt(key) });
  };

  _onChildMouseLeave = key => {
    this.setState({ hovered: null });
  };

  render() {
    return (
      <div
        style={{
          height: "450px",
          width: "80%",
          marginLeft: "10%",
          marginRight: "10%",
          position: "center",
          border: "solid",
          borderRadius: "5px"
        }}
      >
        <GoogleMap
          bootstrapURLKeys={{
            key: ""
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            console.log("loaded", map, maps)
          }
          onChildClick={this._onChildClick}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}
        >
          {this.props.allCamps.map(camp => (
            <CampMarker
              key={camp.id}
              lat={camp.Latitude}
              lng={camp.Longitude}
              text={camp.Name}
              hover={camp.id === this.state.hovered}
            />
          ))}
        </GoogleMap>
      </div>
    );
  }
}
export default withRouter(Map);
