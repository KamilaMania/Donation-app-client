import React from "react";
import { Navbar, Container, NavbarBrand } from "reactstrap";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Navbar color="dark">
          <Container>
            <NavbarBrand></NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}
