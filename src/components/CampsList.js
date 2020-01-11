import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import "./style.css";
import { Link } from "react-router-dom";

export default class CampsList extends React.Component {
  render() {
    return (
      <Card className="card">
        <CardActionArea component={Link} to={"/camp/" + this.props.data.id}>
          <CardHeader
            title={this.props.data.Name}
            subheader={this.props.data.Country}
          />
          <CardMedia className="card-image" image={this.props.data.urlLogo} />
          <CardContent>
            <br />
            <Typography variant="body2" color="textSecondary" component="p">
              Population: {this.props.data.Refugees}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
