import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const CampMarker = ({ text }) => <LocationOnIcon>{text}</LocationOnIcon>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 12.156457,
      lng: 30.739305
    },
    zoom: 4
  };

  createCampMarkers = () => {
    const { allCamps } = this.props;
    if (!allCamps) return [];
    const allMarkers = allCamps.map(camp => (
      <CampMarker
        key={camp.id}
        lat={camp.Latitude}
        lng={camp.Longitude}
        text={camp.Name}
      />
    ));
    return allMarkers;
  };

  render() {
    const allMarkers = this.createCampMarkers();
    console.log(allMarkers);
    return (
      <div style={{ height: "500px", width: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyA40x4q - YtnCHibRSg98aJToojvkoVsQP8"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            console.log("loaded", map, maps)
          }
        >
          {allMarkers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
