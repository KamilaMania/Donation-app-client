import React from "react";
import { connect } from "react-redux";
import { fetchCamp } from "../store/camps/actions";
import Button from "@material-ui/core/Button";
import "./style.css";
import Card from "@material-ui/core/Card";
import { CardContent, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";

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
        <Card className="detailed-card">
          {this.props.camp.selectedCamp && (
            <div>
              <h1>{this.props.camp.selectedCamp.Name}</h1>
              <h2>{this.props.camp.selectedCamp.Country}</h2>
              <h3>Population: {this.props.camp.selectedCamp.Refugees}</h3>

              <CardMedia>
                <img
                  alt=""
                  className="detailes-image"
                  src={this.props.camp.selectedCamp.urlLogo}
                ></img>
              </CardMedia>
              <CardContent>
                {this.props.camp.selectedCamp.Description}
              </CardContent>
            </div>
          )}{" "}
        </Card>
        <br />
        <div>
          <h3>How can I help?</h3>
          <br />
          <Button
            size="small"
            color="primary"
            component={Link}
            to={"/donation/" + this.props.match.params.id}
          >
            Donation
          </Button>
          <br />
          <Button
            size="small"
            color="primary"
            component={Link}
            to={"/shoppinglist/" + this.props.match.params.id}
          >
            Send a Package
          </Button>
        </div>
        <br />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  camp: state.camp
});
export default connect(mapStateToProps)(Camp);
