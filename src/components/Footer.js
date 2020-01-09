import React, { Component } from "react";
import { Navbar, Container, NavbarBrand } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom">
        <Navbar color="dark" dark>
          <Container>
            <NavbarBrand>@mania</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default Footer;
