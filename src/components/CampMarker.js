import React, { Component } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export default class CampMarker extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.hover !== this.props.hover) {
    }
  }
  render() {
    return (
      <div>
        <LocationOnIcon>{this.props.key}</LocationOnIcon>
        {this.props.hover && (
          <span className="marker-name">{this.props.text}</span>
        )}
      </div>
    );
  }
}
