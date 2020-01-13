import React from "react";
import "./Navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="header-banner">
            <h3>
              “To be called a refugee is the opposite of an insult. It is a
              badge of strength, courage, and victory.” — Tennessee Office for
              Refugees
            </h3>
          </div>
          <div className="clear"></div>
        </header>
      </div>
    );
  }
}
